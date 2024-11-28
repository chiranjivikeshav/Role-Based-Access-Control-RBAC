from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from .forms import CustomUserCreationForm
from .models import User

# User Registration
def register_view(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = CustomUserCreationForm()
    return render(request, 'register.html', {'form': form})

# User Login
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('dashboard')
        else:
            return render(request, 'login.html', {'error': 'Invalid credentials'})
    return render(request, 'login.html')

# User Logout
def logout_view(request):
    logout(request)
    return redirect('login')

# Role-Based Dashboard
@login_required
def dashboard_view(request):
    if request.user.role == 'admin':
        return render(request, 'dashboard_admin.html')
    elif request.user.role == 'moderator':
        return render(request, 'dashboard_moderator.html')
    else:
        return render(request, 'dashboard_user.html')
