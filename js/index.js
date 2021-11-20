const cboLanguage = document.getElementById('cboLanguage');


cboLanguage.addEventListener('change', (e) => {
    let res = e.target.value;
    if(res = 'en'){
        location.href = 'index.html'
    }else if(res = 'es'){
        location.href = 'es/index.html';
    }else{
        console.log('error');
    }
})
