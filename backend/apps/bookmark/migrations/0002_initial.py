# Generated by Django 4.0 on 2022-01-03 16:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("bookmark", "0001_initial"),
        ("park", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="bookmark",
            name="park_id",
            field=models.ForeignKey(
                db_column="park_id",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="bookmark_park",
                to="park.park",
                verbose_name="공원 ID",
            ),
        ),
    ]