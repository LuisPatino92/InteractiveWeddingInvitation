# Generated by Django 4.0.6 on 2022-07-31 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='companion',
            name='name',
            field=models.CharField(default='Nobody', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='guest',
            name='name',
            field=models.CharField(default='NOBODY', max_length=50),
            preserve_default=False,
        ),
    ]
