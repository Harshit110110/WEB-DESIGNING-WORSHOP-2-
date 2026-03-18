function calculateResult() {
    let n=document.getElementById("subjects").value;
    let totalMarks=0;
    for(let i=0;i<n;i++){
        let x=parseFloat(prompt("Enter the subject No. "+(i+1)));
        totalMarks+=x;
    }
    let averageMarks=totalMarks/n;
    let grade="";
    if(averageMarks>=90){
        grade="A";
    }
    else if(averageMarks>=80 && averageMarks<90){
        grade="B";
    }
    else if(averageMarks>=70&& averageMarks<80){
        grade="C";
    }
    else if(averageMarks>=60 && averageMarks<70){
        grade="D";
    }
    else{
        grade="F";
    }
    let r=document.getElementById("result").innerHTML="Total Marks: "+totalMarks+"<br> Average Marks: "+averageMarks+"<br> Grade: "+grade;
    console.log(r);
    displayResult(r);

}