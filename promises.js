//Question 1
const messages= async(message,delay)=>{
 await new Promise(resolve => setTimeout(resolve,delay));
  console.log(message);
};

messages("I am Angela Adisa",4000);

//Question 2
const getUserData = id =>{
    return new Promise(resolve => {
        setTimeout(()=>{
            const users = [
                {id:7,name:"Angela",age:24},
                {id:17,name:"Linda",age:30},
                {id:8,name:"Brenda",age:26},
                {id:9,name:"Linda",age:23},
                {id:5,name:"Adisa",age:27},

            ];
            const user = users.find(user=>user.id ===id);
            resolve(user);
        },4000);
    });
};

const fetchLogUserID = async(userIds)=>{
    for (let id of userIds){
        const userData = await getUserData(id);
        console.log(userData);
    }
};

const userIds = [7,17,8,9,5]
fetchLogUserID(userIds);

//QUESTION 3

const performTask = () =>{
    return new Promise((resolve,reject)=>{
        const taskSuccess = Math.random();
        if(taskSuccess >= 17.5){
            resolve(`Task is successful`);
        } else{
            reject(`Task failed`);
        }
    });
}

async function handleTask(){
    try{
        await performTask();
        console.log(`Task is successful`);
    }catch (error){
        console.log(`Error while performing task`);
    }
}
handleTask()