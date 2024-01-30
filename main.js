const counters = document.querySelectorAll(".counters")

counters.forEach((counter)=> {
    counter.innerText = "0"

    const updateTarget = () => {
        const target = counter.getAttribute("data-target");
        const c = +counter.innerText;

        const incremento = target / 200;

        if(c < target){
            counter.innerText = `${Math.ceil(incremento + c)}`
            setTimeout(updateTarget, 1)
        } else {
            counter.innerText = target
        }
    }
    updateTarget()
})