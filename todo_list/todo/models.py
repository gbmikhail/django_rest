from django.db import models

from custom_auth.models import CustomUser


class Project(models.Model):
    name = models.CharField(max_length=128, unique=True, db_index=True, verbose_name='Проект')
    href = models.CharField(max_length=255, verbose_name='Ссылка на репозиторий')
    user = models.ManyToManyField(to=CustomUser, verbose_name='Пользователь')

    def __str__(self):
        return f'{self.name}'


class Todo(models.Model):
    project = models.ForeignKey(Project, null=False, on_delete=models.CASCADE, db_index=True, verbose_name='Проект')
    text = models.CharField(max_length=1024, verbose_name='Текст заметки')
    created_at = models.DateTimeField(db_index=True, auto_now_add=True, verbose_name='Время создания')
    updated_at = models.DateTimeField(db_index=True, auto_now=True, verbose_name='Время обновления')
    created_user = models.ForeignKey(CustomUser, null=False, on_delete=models.CASCADE, db_index=True,
                                     verbose_name='Пользователь, создавший заметку')
    is_active = models.BooleanField(default=True, db_index=True, null=False, verbose_name='Активно')

    def __str__(self):
        return f'{self.project} - {self.text[:10]}'
