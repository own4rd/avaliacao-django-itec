# Generated by Django 3.2.6 on 2021-08-13 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('promotions', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='promotion',
            name='status',
            field=models.CharField(choices=[('publicado', 'Publicado'), ('banido', 'Banido')], default='published', max_length=10),
        ),
    ]
