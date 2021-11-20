const cboLanguage = document.getElementById('cboLanguage');


cboLanguage.addEventListener('change', (e) => {
    let res = e.target.value;
    if(res == 'en'){
        window.location.href = '../index.html'
    }else if(res == 'es'){
        window.location.href = 'es/index.html';
    }else{
        console.log('error');
    }
})
