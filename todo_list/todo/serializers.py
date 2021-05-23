from rest_framework import serializers
from rest_framework.serializers import HyperlinkedModelSerializer

from todo.models import Project, Todo


# class ProjectModelSerializer(HyperlinkedModelSerializer):
class ProjectModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


# class TodoModelSerializer(HyperlinkedModelSerializer):
class TodoModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
