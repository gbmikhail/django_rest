from django.contrib import admin

from todo.models import Project, ProjectUsers, Todo

admin.site.register(Project)
admin.site.register(ProjectUsers)
admin.site.register(Todo)
