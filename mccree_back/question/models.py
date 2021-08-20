from django.db import models


class Question(models.Model):
    photo = models.ImageField(upload_to='photo/')
    answer = models.CharField(max_length = 20)

    def __str__(self):
        return self.answer
