function attachGradientEvents() {
    const gradientDivEle = document.getElementById("gradient");
    gradientDivEle.addEventListener("mousemove", gradientCount);
    gradientDivEle.addEventListener("mouseout", dradientClear)

    function gradientCount(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = `${power}%`;
    }

    function dradientClear() {
        document.getElementById('result').textContent = '';
    }
}