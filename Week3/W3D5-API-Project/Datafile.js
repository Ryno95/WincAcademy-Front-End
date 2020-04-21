const taskUrl = 'https://wincacademydatabase.firebaseio.com/ryno/tasks.json';


const getTasks = async function() {
    try {
        //get the tasks from the URL with GET method
        const response = await fetch(taskUrl, { method: "GET" });
        console.log("this is the response", response);
        //convert data to a usable format and return that data to be used
        const convertedData = await response.json();
        console.log("this is your converted data", convertedData);
        const tasks = Object.keys(convertedData).map(key => ({ //to get an array from the object
            id: key,
            description: convertedData[key].description,
            done: convertedData[key].done
        }));
        console.log("hopefully an arr-Yaaay", tasks);
        return tasks
    } catch (error) {
        console.log(error);
    }
}

//Fucntion to post a new items in the list
const addTask = async function() {
    try {
        let description = document.getElementById("input-new-text").value
        addTask.addEventListener("click", function() {
            convertTaskstoList();
        });
        console.log("kijk ff hiero naar je description", description);
        const response = await fetch(taskUrl, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(description),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        const json = await response.json();
        console.log('Success:', JSON.stringify(json));
    } catch (error) {
        console.error('Error:', error);
    }
};
addTask();

//Function to delte item from list

//twee dingen die moeten gebeuren:
// doe post naar data base 

//getElementById(text)

const changeBackgroundColorHome = function() {
    const changeBackGroundH = document.getElementById("Hbutton");
    changeBackGroundH.addEventListener('click', function() {
        changeClassBackgroundH();
        console.log('This Color Change Button has been clicked'); //te testen of de button het doet
    });
};