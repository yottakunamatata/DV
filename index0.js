d3.csv("身心障礙者人數0.csv").then(function (data) {

    // canvas

    console.log(data)

    // var buttons = document.querySelector('.buttons');
    // buttons.addEventListener('click', draw, false);

    var width = 800;
    var height = 600;

    var canvas = d3.select('body')
        .append('svg')
        .attr('class', 'canvas')
        .attr('width', 1000)
        .attr('height', 850)

    var widthScale = d3.scaleLinear()
        .domain([120000, 125000])
        .range([0, width])

    var heightScale = d3.scaleLinear()
        .domain([100, 109])
        .range([0, height])

    var axisB = d3.axisBottom()
        .scale(widthScale)

    var axisL = d3.axisLeft()
        .scale(heightScale)

    var bar = canvas.selectAll('rect')
        .data(data)
        .enter()




    // .attr('fill', '#6C97D1')
    var text = canvas.selectAll('text')
        .data(data)
        .enter()


    // axis

    canvas.append('g')
        .call(axisB)
        .attr('transform', 'translate(100,700)')
        .attr('class', 'axisB')

    canvas.append('g')
        .call(axisL)
        .attr('transform', 'translate(100,100)')
        .attr('class', 'axisL')

    // 圖解
    // 年份
    canvas.append('text')
        .text('年份')
        .attr('class', 'year')
        .attr('x', -70)
        .attr('y', -20)
    canvas.append('text')
        .text('人數')
        .attr('class', 'num_t')
        .attr('x', 50)
        .attr('y', 50)


    document.getElementById("Hearing_Disability").onclick = function () {
        draw1()
    };
    document.getElementById("Vision_Disability").onclick = function () {
        draw2()
    };
    document.getElementById("Mentally_Disability").onclick = function () {
        draw3()
    };

    function draw1() {

        d3.selectAll('rect').remove();
        d3.selectAll('text').remove();

        var widthScale = d3.scaleLinear()
            .domain([120000, 125000])
            .range([0, width])

        var heightScale = d3.scaleLinear()
            .domain([100, 109])
            .range([0, height])

        var axisB = d3.axisBottom()
            .scale(widthScale)

        var axisL = d3.axisLeft()
            .scale(heightScale)

        canvas.append('g')
            .call(axisB)
            .attr('transform', 'translate(100,700)')
            .attr('class', 'axisB')

        canvas.append('g')
            .call(axisL)
            .attr('transform', 'translate(100,100)')
            .attr('class', 'axisL')

        bar.append('rect')
            .attr('class', 'h_rect')
            .attr('height', 40)
            .attr('opacity', 0)
            .attr('y', function (d, i) {
                return (i * 67) + 150;
            })
            .attr('x', function (d, i) {
                return i + 100;
            })
            .attr('width', 0)
            // 動畫
            .transition()
            .ease(d3.easeLinear)
            .duration(1000)
            .attr('opacity', 100)
            .attr('width', function (d, i) {
                return widthScale(d.Hearing_Disability);
            })

        text.append('text')
            .attr('y', function (d, i) {
                return (i * 67) + 178;
            })
            .attr('x', function (d, i) {
                return (d.Hearing_Disability * 2 / 1000);
            })
            .attr('class', 'num')
            .transition()
            .duration(1000)
            .delay(1000)
            .attr('opacity', 100)
            .text(function (d) {
                return parseInt(d.Hearing_Disability);
            })


        canvas.append('text')
            .text('101 - 108年度台灣聽覺障礙人數變化')
            .attr('class', 'title')
            .attr('x', 50)
            .attr('y', 50)

        canvas.append('text')
            .text('年份')
            .attr('class', 'year')
            .attr('x', -70)
            .attr('y', -20)
        canvas.append('text')
            .text('人數')
            .attr('class', 'num_t')
            .attr('x', 50)
            .attr('y', 50)
    }

    function draw2() {
        d3.selectAll('rect').remove();
        d3.selectAll('text').remove();

        var widthScale = d3.scaleLinear()
            .domain([50000, 60000])
            .range([0, width])

        var heightScale = d3.scaleLinear()
            .domain([100, 109])
            .range([0, height])

        var axisB = d3.axisBottom()
            .scale(widthScale)

        var axisL = d3.axisLeft()
            .scale(heightScale)

        canvas.append('g')
            .call(axisB)
            .attr('transform', 'translate(100,700)')
            .attr('class', 'axisB')

        canvas.append('g')
            .call(axisL)
            .attr('transform', 'translate(100,100)')
            .attr('class', 'axisL')

        bar.append('rect')
            .attr('class', 'v_rect')
            .attr('height', 40)
            .attr('opacity', 0)
            .attr('y', function (d, i) {
                return (i * 67) + 150;
            })
            .attr('x', function (d, i) {
                return i + 100;
            })
            .attr('width', 0)
            // 動畫
            .transition()
            .ease(d3.easeLinear)
            .duration(1000)
            .attr('opacity', 100)

            .attr('width', function (d, i) {
                return widthScale(d.Vision_Disability);
            })

        text.append('text')
            .attr('class', 'num')
            .attr('y', function (d, i) {
                return (i * 67) + 178;
            })
            .attr('x', function (d, i) {
                return i + 300
            })
            .transition()
            .duration(1000)
            .delay(1000)
            .attr('opacity', 100)
            .text(function (d) {
                return d.Vision_Disability;
            })



        canvas.append('text')
            .text('101 - 108年度台灣視覺障礙人數變化')
            .attr('class', 'title')
            .attr('x', 50)
            .attr('y', 50)

        canvas.append('text')
            .text('年份')
            .attr('class', 'year')
            .attr('x', -70)
            .attr('y', -20)
        canvas.append('text')
            .text('人數')
            .attr('class', 'num_t')
            .attr('x', 50)
            .attr('y', 50)
    }

    function draw3() {
        d3.selectAll('rect').remove();
        d3.selectAll('text').remove();

        var widthScale = d3.scaleLinear()
            .domain([90000, 104000])
            .range([0, width])

        var heightScale = d3.scaleLinear()
            .domain([100, 109])
            .range([0, height])

        var axisB = d3.axisBottom()
            .scale(widthScale)

        var axisL = d3.axisLeft()
            .scale(heightScale)

        canvas.append('g')
            .call(axisB)
            .attr('transform', 'translate(100,700)')
            .attr('class', 'axisB')

        canvas.append('g')
            .call(axisL)
            .attr('transform', 'translate(100,100)')
            .attr('class', 'axisL')

        bar.append('rect')
            .attr('class', 'm_rect')
            .attr('height', 40)
            .attr('opacity', 0)
            .attr('width', 0)
            .attr('x', function (d, i) {
                return i + 100;
            })
            .attr('y', function (d, i) {
                return (i * 67) + 150;
            })

            // 動畫
            .transition()
            .ease(d3.easeLinear)
            .duration(1000)
            .attr('width', function (d, i) {
                return widthScale(d.Mentally_Disability);
            })
            .attr('opacity', 100)



        text.append('text')
            .attr('class', 'num')
            .attr('y', function (d, i) {
                return (i * 67) + 178;
            })
            .attr('x', function (d, i) {
                return i + 300
            })

            .transition()
            .duration(1000)
            .delay(1000)
            .attr('opacity', 100)
            .text(function (d) {
                return d.Mentally_Disability;
            })





        canvas.append('text')
            .text('101 - 108年度台灣心智障礙人數變化')
            .attr('class', 'title')
            .attr('x', 50)
            .attr('y', 50)

        canvas.append('text')
            .text('年份')
            .attr('class', 'year')
            .attr('x', -70)
            .attr('y', -20)
        canvas.append('text')
            .text('人數')
            .attr('class', 'num_t')
            .attr('x', 50)
            .attr('y', 50)
    }



});