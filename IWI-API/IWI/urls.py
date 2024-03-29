"""IWI URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from core.views import get_guest, confirm, set_guests, get_metrics

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/getguest/', get_guest),
    path('api/confirm/', confirm),
    path('api/setguests/', set_guests),
    path('api/comovamos/', get_metrics),
]
