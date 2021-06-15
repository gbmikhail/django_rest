import graphene
from graphene_django import DjangoObjectType

from custom_auth.models import CustomUser
from todo.models import Todo, Project


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = CustomUser
        fields = '__all__'


class Query(graphene.ObjectType):
    all_todo = graphene.List(TodoType)
    all_project = graphene.List(ProjectType)
    all_user = graphene.List(UserType)
    user_by_id = graphene.Field(UserType, id=graphene.Int(required=True))

    def resolve_all_todo(self, info):
        return Todo.objects.all()

    def resolve_all_project(self, info):
        return Project.objects.all()

    def resolve_all_user(self, info):
        return CustomUser.objects.all()

    def resolve_user_by_id(self, info, id):
        return CustomUser.objects.get(pk=id)


schema = graphene.Schema(query=Query)
