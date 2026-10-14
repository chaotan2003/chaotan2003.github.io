---
layout: report
title: Humanoid Locomotion Control and Sim2Real
description: Technical overview of a humanoid locomotion framework combining reinforcement learning, model predictive control, and Sim2Real deployment.
permalink: /projects/humanoid-locomotion-report/
---

# Humanoid Locomotion Control and Sim2Real

<p class="report-meta"><strong>Chao Tan</strong><br>Reinforcement Learning · Model Predictive Control · Sim2Real</p>

> This project explores a hybrid locomotion-control framework for humanoid robots, connecting model-based planning, learned control, simulation, and deployment on physical hardware.

## Overview

Humanoid locomotion requires the controller to track commanded motion while maintaining balance, respecting joint and contact constraints, and remaining robust to modeling errors. This project combines **model predictive control (MPC)** and **reinforcement learning (RL)** to study that problem across simulation and real-world deployment.

The demonstrated capabilities include:

- walking and running behaviors;
- transitions between locomotion patterns;
- simulated validation before hardware deployment; and
- Sim2Real deployment on a physical humanoid robot.

## Control framework

The system is organized around a closed-loop locomotion pipeline:

1. A motion command specifies the desired direction and speed.
2. The controller uses the current robot state and desired motion to construct a locomotion target.
3. MPC contributes model-based prediction over a finite horizon, making balance, tracking, and physical constraints explicit.
4. The learned policy contributes adaptive behavior that is difficult to capture with an exact analytical model.
5. The resulting commands are executed in simulation or sent through the hardware control interface.
6. Robot observations close the loop for the next control step.

This combination uses the complementary strengths of the two approaches: MPC provides interpretable predictive structure, while RL offers flexibility in the presence of nonlinear dynamics and model mismatch.

## Model predictive control

At each control step, MPC considers a sequence of future states and control inputs over a finite horizon. A generic objective can be written as:

`tracking cost + balance cost + control effort + smoothness cost`

subject to the robot dynamics and operational constraints. In the locomotion setting, this formulation is useful for anticipating the effect of current actions on future balance rather than reacting only to instantaneous error.

The MPC component is responsible for the model-based structure of the motion, including target tracking and constraint-aware prediction. Receding-horizon execution repeatedly updates the plan using the latest observed state.

## Reinforcement learning

The reinforcement-learning component is trained in simulation, where a large number of interactions can be collected safely. The policy maps robot observations and motion commands to control actions or corrective terms.

The learning objective is centered on the behaviors required for locomotion:

- tracking commanded motion;
- maintaining an upright and stable posture;
- producing smooth, physically plausible actions;
- coordinating joints through gait changes; and
- recovering from variations not represented perfectly by the model.

The learned component complements the predictive controller by improving adaptability without discarding the structure supplied by the model-based layer.

## Sim2Real deployment

Simulation provides a controlled environment for training and testing before the policy is transferred to hardware. The Sim2Real stage focuses on reducing the gap between simulated and physical execution in several practical areas:

- consistent joint ordering, units, limits, and action scaling;
- observation and command timing;
- actuator and contact-model mismatch;
- conservative command limits and safe initialization; and
- staged validation from simulation to supported hardware tests.

The project video shows both simulated locomotion and deployment on a physical humanoid platform. This staged workflow allows controller behavior to be checked before real-world execution and makes deployment failures easier to diagnose.

## Demonstration

<video controls playsinline preload="metadata">
  <source src="/files/projects/humanoid-locomotion.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

The demonstration progresses from simulated locomotion to physical-robot experiments, highlighting the transition from policy development to hardware validation.

## Current scope and next steps

The current project establishes an end-to-end locomotion and deployment workflow. Natural extensions include quantitative tracking and stability benchmarks, disturbance-recovery tests, terrain variation, reduced external support during deployment, and broader evaluation across robot platforms.

<p class="report-nav"><a href="/">← Back to Chao Tan's homepage</a></p>
