﻿namespace Melodiy.Features.Authentication.Models;

using Melodiy.Features.User.Entities;

public sealed class RegisterRequestModel
{
    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string? UserAgent { get; set; }
}
