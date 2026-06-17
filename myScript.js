function openModal(title, desc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    
    document.getElementById('mapaeModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('mapaeModal').style.display = 'none';
}


function showStamp(type) {
   
    const stamps = document.querySelectorAll('.stamp-img');
    stamps.forEach(stamp => {
        stamp.classList.remove('show');
    });

    
    const targetStamp = document.getElementById('stamp-' + type);
    if (targetStamp) {
        targetStamp.classList.add('show');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    const follower = document.getElementById('mouse-follower');

    
    document.addEventListener('mousemove', function(e) {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    

    const swapTargets = document.querySelectorAll('.name-swap-box');
    
    const swapObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                
                entry.target.classList.add('active');
            }
        });
    }, { 
        threshold: 0.8 
    }); 

    
    swapTargets.forEach(target => {
        swapObserver.observe(target);
    });
});