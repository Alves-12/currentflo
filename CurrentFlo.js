let previewContainer=document.querySelector('.product-preview');
let previweBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.product-container .product').forEach(product =>{
    product.onclick =() =>{
        previewContainer.style.display = 'flex';
        let name =product.getAttribute('data-name');
        previweBox.forEach(preview =>{
            let target =preview.getAttribute('data-target');
            if(name==target){
                preview.classList.add('active');
            }
        })
    }
})

previweBox.forEach(close => {
    close.classList.remove('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'flex'; 
    }
})