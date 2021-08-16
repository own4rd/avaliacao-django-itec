from django.contrib import admin

from .models import Promotion, Category

@admin.register(Promotion)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name', 'id','slug', 'author', 'site')
    prepopulated_fields = {'slug': ('name',),}

admin.site.register(Category)
