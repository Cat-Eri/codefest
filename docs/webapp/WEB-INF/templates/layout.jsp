<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="ru">
<head>
    <%@ include file="/WEB-INF/templates/seo-meta.jsp" %>
    
    <title><c:out value="${pageTitle}"/> | CODEFEST 2026</title>
    <meta name="description" content="<c:out value="${pageDescription}"/>">
    <meta name="keywords" content="<c:out value="${pageKeywords}"/>">
    
    <!-- Open Graph -->
    <meta property="og:title" content="<c:out value="${pageTitle}"/>">
    <meta property="og:description" content="<c:out value="${pageDescription}"/>">
    <meta property="og:image" content="${pageContext.request.contextPath}/resources/images/og-image.jpg">
    <meta property="og:url" content="${pageContext.request.contextPath}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="ru_RU">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<c:out value="${pageTitle}"/>">
    <meta name="twitter:description" content="<c:out value="${pageDescription}"/>">
    
    <!-- Canonical -->
    <link rel="canonical" href="${pageContext.request.contextPath}">
    
    <!-- CSS -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/main.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/theme-purple.css" id="theme-stylesheet">
    
    <!-- Preload -->
    <link rel="preload" as="image" href="${pageContext.request.contextPath}/resources/images/codefest-bg.jpeg">
</head>
<body class="${bodyClass}">
    <%@ include file="/WEB-INF/templates/header.jsp" %>
    
    <main id="main-content" role="main">
        <jsp:doBody/>
    </main>
    
    <%@ include file="/WEB-INF/templates/footer.jsp" %>
    
    <!-- Schema.org Event -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "CODEFEST 2026",
        "startDate": "2026-09-17",
        "endDate": "2026-09-18",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
            "@type": "Place",
            "name": "Конференц-центр Челябинска",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Челябинск",
                "addressRegion": "Челябинская область",
                "addressCountry": "RU"
            }
        },
        "image": "${pageContext.request.contextPath}/resources/images/codefest-bg.jpeg",
        "description": "<c:out value="${pageDescription}"/>",
        "offers": {
            "@type": "Offer",
            "url": "${pageContext.request.contextPath}/registration",
            "price": "5000",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock"
        },
        "organizer": {
            "@type": "Organization",
            "name": "CODEFEST",
            "url": "${pageContext.request.contextPath}"
        }
    }
    </script>
    
    <script src="${pageContext.request.contextPath}/resources/js/main.js" defer></script>
</body>
</html>