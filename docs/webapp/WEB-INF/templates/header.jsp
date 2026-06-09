<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<header class="header" role="banner">
    <div class="container">
        <nav class="nav" role="navigation" aria-label="Главное меню">
            <a href="${pageContext.request.contextPath}/" class="logo" aria-label="CODEFEST 2026 - на главную"><img class="imagelogo" src="${pageContext.request.contextPath}/resources/images/logo.png" class="imagelogo" alt="логотип">CODEFEST</a>
            
            <button class="burger" aria-label="Открыть меню" aria-expanded="false" aria-controls="nav-menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <ul class="nav-links" id="nav-menu">
                <li><a href="#about">О конференции</a></li>
                <li><a href="#speakers">Спикеры</a></li>
                <li><a href="#program">Программа</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#register" class="btn btn-nav">Регистрация</a></li>
            </ul>
        </nav>
    </div>
</header>
