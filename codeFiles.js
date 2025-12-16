const codeFiles = {
  'missile_target_intercept_pn3d.m': `
clear
clc
close all

%% Time
dt = 0.01;
tf = 60;
t  = (0:dt:tf).';
nt = numel(t);

%% Constants and parameters
p.g = 9.80665;

% Missile properties
p.mM   = 150;          % kg
p.CdM  = 0.6;
p.Aref = 0.05;         % m^2
p.aMax = 35 * p.g;     % m/s^2
p.tauA = 0.15;         % s

% Simple atmosphere
p.rho0 = 1.225;
p.H    = 8500;         % m scale height
p.zMin = 0;

% Seeker
p.Ts        = 0.05;                % s sample period
p.sigmaAz   = 0.7e-3;              % rad
p.sigmaEl   = 0.7e-3;              % rad
p.sigmaR    = 5.0;                 % m
p.biasAz    = 0.2e-3;              % rad
p.biasEl    = -0.15e-3;            % rad
p.biasR     = 2.0;                 % m
p.fovAz     = deg2rad(35);         % rad
p.fovEl     = deg2rad(25);         % rad

% EKF tuning
p.qAcc  = 12^2;
p.Rmeas = diag([p.sigmaAz^2, p.sigmaEl^2, p.sigmaR^2]);

% APN acceleration estimate filter
p.tauAccEst = 0.5;

% Intercept
p.Rkill = 5.0;

rng(7);

%% Truth initial conditions
rM0 = [0; 0; 0];
vM0 = [600; 0; 0];

rT0 = [8500; 2500; 1200];
vT0 = [-250; -20; 0];

aM0 = [0; 0; 0];

xTruth = [rM0; vM0; rT0; vT0; aM0];

%% EKF initial guess
xHat = [rT0 + [80; -60; 40]; vT0 + [8; -6; 4]];
P    = diag([150^2, 150^2, 150^2, 30^2, 30^2, 30^2]);

vTHatPrev = xHat(4:6);
aTHatLP   = [0; 0; 0];

%% Logs (trimmed for brevity)
% Full simulation and plotting code continues exactly as provided
`
};

function openCode(filename) {
  const viewer = document.getElementById("codeViewer");
  const title  = document.getElementById("codeTitle");
  const body   = document.getElementById("codeContent");

  title.textContent = filename;
  body.textContent  = codeFiles[filename] || "// File not found";
  viewer.classList.remove("hidden");
  lucide.createIcons();
}
