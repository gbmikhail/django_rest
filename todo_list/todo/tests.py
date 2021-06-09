from django.test import TestCase
from mixer.backend.django import mixer
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APITestCase

from custom_auth.models import CustomUser
from custom_auth.views import CustomUserModelViewSet
from todo.models import Project
from todo.views import ProjectModelViewSet, TodoModelViewSet


class TestTodo(TestCase):
    def test_project_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/project/')

        admin = CustomUser.objects.create_superuser('admin', 'admin@admin.com', 'admin')
        force_authenticate(request, admin)

        view = ProjectModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_detail(self):
        client = APIClient()
        admin = CustomUser.objects.create_superuser('admin', 'admin@admin.com', 'admin')
        client.login(username='admin', password='admin')
        # project = Project.objects.create(name='test project', href="0")
        # project.user.add(admin)

        project = mixer.blend(Project)

        response = client.get(f'/api/project/{project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestUserViewSet(APITestCase):
    def test_get_list(self):
        admin = CustomUser.objects.create_superuser('admin', 'admin@admin.com', 'admin')
        self.client.login(username='admin', password='admin')
        response = self.client.get('/api/todo/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
