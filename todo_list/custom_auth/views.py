from django.shortcuts import render
from rest_framework import mixins, viewsets
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import AllowAny, BasePermission
from rest_framework.viewsets import ModelViewSet

from custom_auth.models import CustomUser
from custom_auth.serializers import CustomUserModelSerializer, CustomUserModelSerializerV2


# class CustomUserLimitOffsetPagination(LimitOffsetPagination):
#     default_limit = 10


# class CustomUserModelViewSet(ModelViewSet):
class CustomUserModelViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin,
                             viewsets.GenericViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserModelSerializer
    # pagination_class = CustomUserLimitOffsetPagination
    # permission_classes = [AllowAny]

    def get_serializer_class(self):
        if self.request.version == '2.0':
            return CustomUserModelSerializerV2
        return CustomUserModelSerializer
