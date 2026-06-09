<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%
    // SEO параметры — устанавливаем ТОЛЬКО то, что не передаётся через jsp:attribute
    request.setAttribute("pageKeywords", "IT конференция, CODEFEST, Челябинск, разработка, программирование, 2026, backend, frontend, data science");
    request.setAttribute("bodyClass", "theme-purple");
%>

<jsp:include page="/WEB-INF/templates/layout.jsp">
    <!-- Передаём SEO-параметры через jsp:attribute -->
    <jsp:attribute name="pageTitle">CODEFEST 2026 — IT-конференция нового поколения</jsp:attribute>
    <jsp:attribute name="pageDescription">CODEFEST 2026 — крупнейшая IT-конференция года. </jsp:attribute>
    
    <jsp:body>
        <%@ include file="/WEB-INF/includes/hero.jsp" %>
        <%@ include file="/WEB-INF/includes/stats.jsp" %>
        <%@ include file="/WEB-INF/includes/directions.jsp" %>
        <%@ include file="/WEB-INF/includes/speakers.jsp" %>
        <%@ include file="/WEB-INF/includes/program.jsp" %>
        <%@ include file="/WEB-INF/includes/faq.jsp" %>
        <%@ include file="/WEB-INF/includes/cta.jsp" %>
    </jsp:body>
</jsp:include>
