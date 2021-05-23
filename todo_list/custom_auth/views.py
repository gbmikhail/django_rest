from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from custom_auth.models import CustomUser
from custom_auth.serializers import CustomUserModelSerializer


class CustomUserModelViewSet(ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserModelSerializer
