import Router from 'navigo';
import { LoginController } from './controllers/LoginController';
const router=new Router('/');
let root;
let loginForm;
let form_data;
const init=()=>{

  router.on('login', ()=>{
    root=document.querySelector('.root');
    const loginviewDiv=document.createElement('div');
    loginviewDiv.innerHTML=`${LoginController.render()}`;
    root.appendChild(loginviewDiv);
    loginForm=document.querySelector('#login-form');
    loginForm.addEventListener('submit', signIn);
    const btnSubmitLogin=document.querySelector('#btn-sign');
    //btnSubmitLogin.addEventListener('click',signIn);
    //
  });
  // router.on('/login',()=>{
    
  //   //const formLogin=document.querySelector('#login-form');
  //   console.log(loginForm);
  //   // const btnSubmitLogin=document.querySelector('#btn-sign');
  //   formLogin.addEventListener('submit',signIn);

  // });

  router.resolve();

};

const signIn= async (event)=>{

  event.preventDefault();
  form_data=new FormData();
  form_data.append('email', loginForm.elements.email.value);
  form_data.append('password', loginForm.elements.password.value);
  await LoginController.login(form_data);
  //console.log(`${form_data.get('email')}`);
  
  
};
// const submitLoginForm=async (e)=>{
//   e.preventDefault();
//   console.log(form_data);
//   const result = await LoginController.login(form_data);
//   console.log(result);
// }

window.addEventListener('load', init);