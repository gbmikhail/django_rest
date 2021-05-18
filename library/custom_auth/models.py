from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    email = models.CharField(max_length=254, unique=True, verbose_name='e-mail')
