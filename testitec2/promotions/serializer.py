from rest_framework import serializers
from promotions.models.promotion import Promotion
from promotions.models.category import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')

class PromotionSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    category_id = serializers.IntegerField()

    class Meta:
        model = Promotion
        fields = ('id', 'name', 'slug', 'author', 'category', 'category_id', 'description', 'site', 'price')