const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')

const sock_session = require('../libs/activeSockets')
/* Models */

const TodoListModel = mongoose.model('MultiToDoList')
const TextModel = mongoose.model('TextNotification')

let addNewEmptyList = (req, res) => {
   
    let addEmptyList = () => {
        return new Promise((resolve, reject) => {
           
            TodoListModel.findOne({ userId: req.body.userId ,listName:req.body.listName})
                .exec((err, retrievedUserDetails) => {
                    if (err) {
                        logger.error(err.message, 'multiTaskList:addEmptyList', 10)
                        let apiResponse = response.generate(true, 'Failed To add empty list', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(retrievedUserDetails)) {
                        console.log(req.body)
                        let newList = new TodoListModel({
                            id: shortid.generate(),
                            userId: req.body.userId,
                            listName : req.body.listName,
                            sharedWith:req.body.userId
                        })
                        newList.save((err, newTask) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'multiTaskList:addEmptyList', 10)
                                let apiResponse = response.generate(true, 'Failed to create new empty list', 500, null)
                                reject(apiResponse)
                            } else {
                                let newUserObj = newTask.toObject();
                                resolve(newUserObj)
                            }
                        })
                    } else {
                        logger.error('this list already exists', 'multiTaskList:addEmptyList', 4)
                        let apiResponse = response.generate(true, 'this list name already exists', 403, null)
                        reject(apiResponse)
                    }
                })
        })
    }// end create user function


    addEmptyList(req,res)
        .then((resolve) => {
            console.log(resolve)
            let apiResponse = response.generate(false, 'new empty multi-list created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
            //sock_session.sessions[err.data.userId].emit("newTaskCreated",err);
        })
  

}


let getAllTodoLists = (req, res) => {

    TodoListModel.find({ 'sharedWith': req.body.userId }, (err, result) => {

        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'error in getting multi-todo list', 400, err)
            res.send(apiResponse)
        }else {
          //  res.send(result)
            let apiResponse = response.generate(false, 'All multi-todo list', 200, result)
            res.send(apiResponse)
        }
    })
}

let shareTodoListWithFriend = (req, res) => {
  
    let findUser = () => {
        
        return new Promise((resolve, reject) => {
           
               
            TodoListModel.findOne({listName: req.body.listName, 'sharedWith': req.body.friendId}, (err, userDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error('Failed To Retrieve User Data', 'multiTaskList Controller: shareToDoListWithFriend()', 10)
                        let apiResponse = response.generate(true, 'Failed To Find shred User Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(userDetails)) {
                         
                      //add text notification
                      let newText = new TextModel({
                        id: shortid.generate(),
                        userId: req.body.friendId,
                        text : `${req.body.ownerName} shared a todo list with you.`,
                        isSeen :false
                    })
                    newText.save((err, newText) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'multiTaskList:shareTodoListWithFriend', 10)
                            let apiResponse = response.generate(true, 'Failed to add text notification', 500, null)
                            reject(apiResponse)
                        } else {
                            
                            TodoListModel.findOneAndUpdate({listName: req.body.listName}, {$push: {sharedWith: req.body.friendId}}, (err, result) => {
                                if (err) {
                                    console.log(err)
                                    let apiResponse = response.generate(true, 'error in sharing todo list', 400, err)
                                    reject(apiResponse)
                                }else {
                                  //  res.send(result)
                                  if(sock_session.sessions[req.body.friendId]!=undefined){
                                      let data = {
                                          text : `${req.body.ownerName} shared a todo list with you.`,
                                          result :result
                                      }
                                    sock_session.sessions[req.body.friendId].emit("you-have-text-notification",data)
                                   }
                                  resolve(result);
                                }
                            })
                        }
                    })



                       
                    } else {
                        logger.info('User Found', 'multiTaskList Controller: shareToDoListWithFriend()', 10)
                        let apiResponse = response.generate(true, 'Already shared !!!', 500, null)
                        reject(apiResponse)
                    }
                });
               
          
        })
    }

    findUser(req,res)
       
        .then((resolve) => {
            let apiResponse = response.generate(false, 'sharing todolist Successful', 200, resolve)
            res.status(200)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
          //  res.status(err.status)
            res.send(err)
        })
   
}

let friendsToListShared = (req, res) => {
    TodoListModel.find({ 'listName': req.body.listName }, (err, result) => {

        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'error in getting shared with friend', 400, err)
            res.send(apiResponse)
        }else {
          //  res.send(result)
            let apiResponse = response.generate(false, 'All freinds, list shared', 200, result)
            res.send(apiResponse)
        }
    })
}

let removeFriendFromSharedList = (req,res)=>{
    TodoListModel.update({listName: req.body.listName}, {$pull: {sharedWith: req.body.friendId}}, {safe: true, upsert: true}).exec((err, result) => {
        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'error in deletion from list shared', 400, err)
            res.send(apiResponse)
        }else {
          console.log(result)
          let apiResponse = response.generate(false, 'Deletion successfull from list shared', 200, result)
          res.send(apiResponse)
        }
    })
}

let getAllTextNotification = (req, res) => {

    TextModel.find({'userId': req.body.userId})
        .sort({date :-1})
        .skip(parseInt(req.body.skip) || 0)
        .lean()
        .limit(10)
        .exec((err, result) => {

        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'error in getting text notifications', 400, err)
            res.send(apiResponse)
        }else {
          //  res.send(result)
            let apiResponse = response.generate(false, 'All text notifications', 200, result)
            res.send(apiResponse)
        }
    })
}

let updateTextNotification = (req, res) => {

    let options = req.body;
    console.log(options);
    TextModel.update({ 'userId': req.body.userId }, options, { multi: true }).exec((err, result) => {

        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'updated text notification failed', 400, err)
            res.send(apiResponse)
        }  else {
            let apiResponse = response.generate(false, 'text notification updated', 200, result)
            res.send(apiResponse)

        }
    })
}


let deleteMultiUserList  = (req, res) => {
    TodoListModel.remove({ 'id': req.body.id}, (err, result) => {
        if (err) {
            console.log(err)
            let apiResponse = response.generate(true, 'error in delete multi user todo list', 400, err)
            res.send(apiResponse)
        } else if (result == undefined || result == null || result == '') {
            console.log('No task found')
            let apiResponse = response.generate(true, 'No such multi user todo list found', 400, result)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'deletion successful', 200, result)
            res.send(apiResponse)

        }
    })
}
module.exports = {
    getAllTodoLists:getAllTodoLists,
    addNewEmptyList:addNewEmptyList,
    shareTodoListWithFriend:shareTodoListWithFriend,
    friendsToListShared:friendsToListShared,
    removeFriendFromSharedList:removeFriendFromSharedList,
    getAllTextNotification:getAllTextNotification,
    updateTextNotification:updateTextNotification,
    deleteMultiUserList:deleteMultiUserList
}