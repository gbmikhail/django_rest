import json
import os

from django.conf import settings
from django.core.management import BaseCommand

from custom_auth.models import CustomUser


def load_from_json(file_name):
    full_file_name = os.path.join(settings.BASE_DIR, "custom_auth", "management", "json", f"{file_name}.json")
    with open(full_file_name, 'r', encoding='utf-8') as f:
        return json.load(f, )


class Command(BaseCommand):
    def handle(self, *args, **options):
        users = load_from_json("users")
        CustomUser.objects.all().delete()
        for item in users:
            print(item.get('username'))
            CustomUser.objects.create_user(**item)
