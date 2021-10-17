var Name_of_the_student_array=[];
function submit(){
    var display_student_array=[];
    for (var j=1;j<=4;j++){
        var Name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(Name_of_the_student);
        Name_of_the_student_array.push(Name_of_the_student);
    }
    console.log(Name_of_the_student_array);
    var Length_of_Name_of_the_student_array=Name_of_the_student_array.length;
    console.log(Length_of_Name_of_the_student_array);
    for (var k=0;k<Length_of_Name_of_the_student_array;k++){
        display_student_array.push("<h4>NAME-"+Name_of_the_student_array[k]+"</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    Name_of_the_student_array.sort();
    console.log(Name_of_the_student_array);
    var display_student_array_sorting=[];
    var Length_of_Name_of_the_student_array=Name_of_the_student_array.length;
    console.log(Length_of_Name_of_the_student_array);
    for (var k=0;k<Length_of_Name_of_the_student_array;k++){
        display_student_array_sorting.push("<h4>NAME-"+Name_of_the_student_array[k]+"</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_commas=display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}