//  input Data 


// submit form  value reveive
let tbodyadmin = document.querySelector('#tbodyadmin');
let tbodypending = document.querySelector('#tbodypending');
let tbodyActive = document.querySelector('#tbodyActive');


let submit = document.querySelector('#submit');

     
    submit.addEventListener('click',(e)=>{
       
    e.preventDefault();
    let namee = document.querySelector('#namee').value;
    let mailee = document.querySelector('#mail').value;
    let mobilenumer = document.querySelector('#mobilenumer').value;
    let courseName = document.querySelector('#courseName').value;
    let price = document.querySelector('#price').value;
 if(namee == "" || mailee == "" || mobilenumer=="" || courseName == "" || price== "" ){
    alert(" please input Data");
 }else{
    const createaAdminTr = document.createElement('tr');
      createaAdminTr.className ='bg-gray-400'; 
        

    const createadminName = document.createElement('td');
    createadminName.innerText  = namee;

    const createadminMailtd = document.createElement('td');
    createadminMailtd.innerText  = mailee;
   
    const createadminMobile = document.createElement('td');
    createadminMobile.innerText  = mobilenumer;
   
    const createadminCourseName = document.createElement('td');
    createadminCourseName.innerText  = courseName;
   
    const createadminPrice = document.createElement('td');
    createadminPrice.innerText  = price;
 
    const createadminbuttontd = document.createElement('td');
    const createButtonaActiv1 = document.createElement('button');
    createButtonaActiv1.innerText = 'Paid';
    createButtonaActiv1.className = ' bg-gray-700 text-gray-300 p-1 rounded paid';
    const createButtonaActiv2 = document.createElement('button');
    createButtonaActiv2.innerText ='None Paid';
    createButtonaActiv2.className =' bg-gray-700 text-gray-300 p-1 rounded nonepaid';
    const createButtonadelet = document.createElement('button');
    createButtonadelet.innerText ='Delet';
    createButtonadelet.className =' bg-red-900 text-gray-300 p-1 rounded delet';

    createadminbuttontd.appendChild(createButtonaActiv1);
    createadminbuttontd.appendChild(createButtonaActiv2);
    createadminbuttontd.appendChild(createButtonadelet);
  
    createaAdminTr.appendChild(createadminName);
    createaAdminTr.appendChild(createadminMailtd);
    createaAdminTr.appendChild(createadminMobile);
    createaAdminTr.appendChild(createadminCourseName);
    createaAdminTr.appendChild(createadminPrice);
    createaAdminTr.appendChild(createadminbuttontd);

   tbodyadmin.appendChild(createaAdminTr);
   console.log(createaAdminTr);
   addengind();
   namee.value = "";
   mailee.value = ""
   mobilenumer.value = "";
   courseName.value = " ";
   price.value = " ";
}

    });
    window.onload = ()=>{
      addengind();
    }
 
    function addengind(){
      

   let alldeletClass = document.querySelectorAll('.delet');
   let allpaidclass = document.querySelectorAll('.paid');
   let allnonepaidclass = document.querySelectorAll('.nonepaid');
   
   for(let i=0; i<alldeletClass.length; i++ ){

    alldeletClass[i].addEventListener('click',(e)=>{
        e.target.parentElement.parentElement.remove();
    })
   }
   for(let j=0; j<allpaidclass.length; j++ ){

    allpaidclass[j].addEventListener('click',(e)=>{
       const tagntr = e.target.parentElement.parentElement;
       tbodyActive.appendChild(tagntr);
    })
   }
   
   for(let k=0; k<allnonepaidclass.length; k++ ){

    allnonepaidclass[k].addEventListener('click',(e)=>{
       const tagntrs = e.target.parentElement.parentElement;
       tbodypending.appendChild(tagntrs);
    })
   }

    }
// admin table value
