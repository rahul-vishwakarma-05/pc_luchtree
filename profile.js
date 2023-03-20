const add_w = document.querySelector('h3 > ion-icon');
const profile_t = document.querySelector('.profile_two');
const withdrawal = document.querySelector('.withdrawal');
const btn = document.querySelector('.btn > button');
const swip = document.querySelector('.switch');
const withd = document.querySelector('.with');
const check = document.querySelector(".checkbox");
const outerdep = document.querySelector('.deposite');
const close = document.querySelector('.withdrawals_in > ion-icon');
const close2 = document.querySelector('.Pc_deposite > ion-icon');
const withdrawals = document.querySelector('.withdrawals');
const deposite_add_btn = document.querySelector('#add');
//---------------------------------------------------- close button for popup --------------------------------------------------------------------- 
close.addEventListener('click', () => {
    profile_t.style.filter = " blur(0)";
    withdrawal.style.transform = "translateY(200%)";
    outerdep.style.transform = "translate(200%)";
    withdrawals.style.transform = "translateY(200%)";
    check.checked = false;
    withd.style.transform = "translateX(0)";
});


// ----------------------------------------------  withdrawal popup -----------------------------------------   -----------------------------------------------------
add_w.addEventListener("click", () => {
    withdrawal.style.transform = "translateY(0)";
    withdrawals.style.transform = "translateY(0)";
    profile_t.style.filter = " blur(10px)";

});



// ------------------------------------------------- withdrawal btn -------

btn.addEventListener('click', () => {
    alert("successfully submited")
});

// ---------------------------------------------------switch system ----------------------------------------------------

swip.addEventListener('click', () => {
    if (check.checked == true) {
        outerdep.style.transform = "translate(0)";
        withd.style.transform = "translate(130%)";
    } else {
        outerdep.style.transform = "translate(130%)";
        withd.style.transform = "translate(0)";
    }
});



// ------------------------------------------------ js for users profile details ---------------------------------------------------------------------

const pro_edit_id1 = document.querySelector('#one');
const pro_edit_icon_id1 = document.querySelector('#one');

const pro_edit_id2 = document.querySelector('#two');
const pro_edit_icon_id2 = document.querySelector('#two');

const pro_edit_id3 = document.querySelector('#three');
const pro_edit_icon_id3 = document.querySelector('#three');

const pro_edit_id4 = document.querySelector('#four');
const pro_edit_icon_id4 = document.querySelector('#four');

const pro_same_clss = document.querySelectorAll('.same');
let pro_icon_sams = document.querySelectorAll('.sams');

pro_same_clss.forEach(element => {
    element.disabled = true;
});
pro_icon_sams.forEach(element => {
    element.addEventListener('click', () => {
        pro_same_clss.forEach(i => {
            if (i.id == element.id) {
                i.disabled = false;
                i.style.cssText = `border-bottom:2px solid black`;
            } else {
                i.disabled = true;
                i.style.cssText = `border-bottom:1px solid black`;
            }
        });
    });
});


// ------------------------------------------- users settngs sliders -------------------------------------------------------------------------------------------------------


const user_icon = document.querySelector('.fa-user');
const bank_icon = document.querySelector('.fa-bank');
const upi_icon = document.querySelector('.upi');
const phone_icon = document.querySelector('.fa-phone');

const pro_det = document.querySelector('.pro_det');
const bank_det = document.querySelector('.bank_det');
const upi_main_page = document.querySelector('.upi_page');
const contact_page = document.querySelector('.contact_page');
const settings_uper_divs = document.querySelectorAll('.setting_opp > div > div');
const p = document.querySelector('#p');
const b = document.querySelector('#b');
const u = document.querySelector('#a');
const c = document.querySelector('#c');

user_icon.addEventListener('click', () => {
    pro_det.style.cssText = ` transform:scaleY(1);height:50%;`;
    bank_det.style.cssText = `transform:scaleY(0);height:0;`;
    upi_main_page.style.cssText = `transform:scaleY(0);height:0;`;
    contact_page.style.cssText = `transform:scaleY(0);height:0;`;
    p.style.color = "#ad1d85";
    b.style.color = "black";
    u.style.color = "black";
    c.style.color = "black";
    pro_same_clss.forEach(element => {
        element.disabled = true;
        element.value = "";
        element.style.cssText = `border-bottom:1px solid`
    });
    
});


bank_icon.addEventListener('click', () => {
    pro_det.style.cssText = ` transform:scaleY(0);height:0;`;
    bank_det.style.cssText = `transform:scaleY(1);height:48%; margin:0`;
    upi_main_page.style.cssText = `transform:scaleY(0);height:0;`;
    contact_page.style.cssText = `transform:scaleY(0);height:0;`;
    p.style.color = "black";
    b.style.color = "#ad1d85";
    u.style.color = "black";
    c.style.color = "black";
    pro_same_clss.forEach(element => {
        element.disabled = true;
        element.value = "";
        element.style.cssText = `border-bottom:1px solid`
    });
    
});


upi_icon.addEventListener('click', () => {
    pro_det.style.cssText = ` transform:scaleY(0);height:0;`;
    bank_det.style.cssText = `transform:scaleY(0);height:0;margin:0`;
    upi_main_page.style.cssText = `transform:scaleY(1);height:48%;`;
    contact_page.style.cssText = `transform:scaleY(0);height:0;`;
    p.style.color = "balck";
    b.style.color = "black";
    u.style.color = "#ad1d85";
    c.style.color = "black";
    pro_same_clss.forEach(element => {
        element.disabled = true;
        element.value = "";
        element.style.cssText = `border-bottom:1px solid`
    });
    
});


phone_icon.addEventListener('click', () => {
    pro_det.style.cssText = ` transform:scaleY(0);height:0;`;
    bank_det.style.cssText = `transform:scaleY(0);height:0;`;
    upi_main_page.style.cssText = `transform:scaleY(0);height:0;`;
    contact_page.style.cssText = `transform:scaleY(1);height:48%;`;
    p.style.color = "black";
    b.style.color = "black";
    u.style.color = "black";
    c.style.color = "#ad1d85";    
    pro_same_clss.forEach(element => {
        element.disabled = true;
        element.value = "";
        element.style.cssText = `border-bottom:1px solid`
    });
    
});

// --------------------------------------------- writting js for the upi id -------------------------------------------------------------------------------------------------------------------------------
const upi_add_btn = document.querySelector('.s_upi > span > ion-icon')
// const upi_main_page = document.querySelector('.upi_page');

const addNewpage = () => {
    const upi_page = document.createElement('div');
    upi_page.classList.add('upis');
    const htmlData = `<input type="text" placeholder="add your upi id">`;
    upi_page.insertAdjacentHTML('afterbegin', htmlData);
    upi_main_page.appendChild(upi_page);
}

upi_add_btn.addEventListener('click', () => {
    addNewpage();
});


// -------------------------------------------------- writting the js for settings outside aerrow ----------------------------------------------------------------------------------------------------------------

const setting_btn = document.querySelector('.profile_two > h4 > ion-icon');
const setting_body = document.querySelector('.setting');
const setting_arrow = document.querySelector('.setting > h3 > ion-icon');

setting_btn.addEventListener('click', () => {
    profile_t.style.transform = "translateX(130%)";
    setting_body.style.transform = "translateX(0%)";
});

setting_arrow.addEventListener('click', () => {
    profile_t.style.transform = "translateX(0)";
    setting_body.style.transform = "translateX(130%)";
    pro_det.style.cssText = ` transform:scaleY(1);height:50%;`;
    bank_det.style.cssText = `transform:scaleY(0);height:0;`;
    upi_main_page.style.cssText = `transform:scaleY(0);height:0;`;
    contact_page.style.cssText = `transform:scaleY(0);height:0;`;
    p.style.color = "#ad1d85";
    b.style.color = "black";
    u.style.color = "black";
    c.style.color = "black";

    pro_same_clss.forEach(element => {
        element.disabled = true;
        element.value = "";
        element.style.cssText = `border-bottom:1px solid`
    });
     
});

// ----------------- writting js for deposite add btn -----------------------------------------------------------------------------------------------------
deposite_add_btn.addEventListener('click' , ()=>{
  alert("added")
});


// -------------------------------------------------- writting the js for the pc withdrawal and deposite ----------------------------------------------------------------------------------------------------------------

const pc_withdrawal = document.querySelector("#pc_W");
pc_withdrawal.addEventListener('click' , ()=>{
    withdrawal.style.transform = "translateX(0)";
    withdrawals.style.transform = "translateX(0)";
    Pc_depo.style.transform = "translateY(140vh)";
     
});
const Pc_depo = document.querySelector('.Pc_deposite');
const pc_dep = document.querySelector("#pc_D");
pc_dep.addEventListener('click' , ()=>{
    Pc_depo.style.transform = "translate(0)";
    withdrawals.style.transform = "translateX(200%)"    
    withdrawal.style.transform = "translateX(200%)";

});
close2.addEventListener('click', ()=>{
    Pc_depo.style.transform = "translateY(140vh)";
        
});