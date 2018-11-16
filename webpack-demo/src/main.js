import $ from 'jquery'
import './css/demo.scss'
import './css/index.css'
import './css/test.less'
$(function(){
    $('ul>li:odd').css('backgroundColor','skyblue')
    $('ul>li:even').css('backgroundColor','#eee')
})