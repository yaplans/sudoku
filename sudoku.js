var vue = new Vue({
    el: "#app",
    data: {
        title: "Sudoku",
        n: 9,
        cells:[],
        rows:[],
        cols:[],
        currentX: 0,
        currentY: 0,
        div_col: [],
        div_dig: [],
        currentColor: "",
        currentDigit: "",
        colors: [
                "red",
                "yellow",
                "green",
                "plum",
                "burlywood",
                "aquamarine",
        ],
    },
    mounted: function(){
        
        var a = this.cells;
        var r = this.rows;
        var d = this.div_dig;

        for (let j = 0; j < (this.n); j++) {
            let c = [];
            for (let i = 0; i < (this.n); i++) {
                let e = {
                    x: i,
                    y: j,
                    v: null,
                    candidate: [],
                    color: "",
                };
                c.push(e);
            }
            r.push(c);
            d.push(j+1);
        }
        console.log(this.rows);

        
    },
    methods:{
        setCoordinates: function(x,y){
            // console.log(x);
            // console.log(y);
            this.currentX=x;
            this.currentY=y;
        },
        setCellValue: function(y,x){
            if(this.currentDigit!=""){
                if (this.rows[x][y].v==this.currentDigit) {
                    this.rows[x][y].v="";
                } else {
                    this.rows[x][y].v=this.currentDigit;
                }
            }
            
            if(this.currentColor!=""){
                if (this.rows[x][y].color==this.currentColor) {
                    this.rows[x][y].color="";
                } else {
                    this.rows[x][y].color=this.currentColor;
                }
            }
        }
    },
});
console.log("Hi!");