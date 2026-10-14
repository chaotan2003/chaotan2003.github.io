---
layout: report
lang: zh-CN
report_label: 技术报告
title: Humanoid Locomotion Control
description: 基于强化学习、对抗运动先验与 Sim2Real 的自研人形机器人运动控制技术报告。
permalink: /projects/humanoid-locomotion-report/
---

# Humanoid Locomotion Control

<p class="report-meta"><strong>人形机器人运动控制</strong><br>强化学习（RL） · 对抗运动先验（AMP） · Sim2Real</p>

## 1. 项目概述

本项目面向自研人形机器人，研究基于强化学习与对抗运动先验（AMP）的全身运动控制方法。通过结合运动任务奖励与运动风格奖励，使机器人在保持动态平衡和跟踪运动指令的同时，生成自然、协调的拟人化运动。

控制策略在物理仿真环境中完成训练与验证，并通过 Sim2Real 技术部署至真实人形机器人，实现稳定的行走与奔跑，兼顾运动鲁棒性与拟人性。

## 2. 方法框架

系统采用基于强化学习的闭环运动控制框架，由策略学习、运动风格约束和 Sim2Real 部署三个部分组成。

控制策略以机器人本体状态和目标运动指令为输入，输出关节控制动作，并利用实时状态反馈持续调整运动行为。

在训练阶段，强化学习通过任务奖励优化速度跟踪、动态平衡与动作平滑性；AMP 通过对抗学习构建运动风格奖励，引导策略生成符合参考运动特征的动作。两类奖励共同优化运动控制策略。

训练完成后，将策略从仿真环境迁移至真实机器人，形成从仿真训练、策略验证到实机部署的完整流程。整体流程参考了人形机器人运动学习与部署的相关工作和开源实现 [2–4]。

## 3. 方法实现

### 3.1 强化学习运动控制

在物理仿真环境中构建人形机器人运动控制任务，利用强化学习训练从机器人状态与目标运动指令到关节控制动作的映射关系。

通过设计速度跟踪、姿态稳定和动作平滑等任务奖励，引导机器人学习稳定的行走与奔跑策略，实现多关节协调与动态平衡控制。

### 3.2 对抗运动先验（AMP）

采用对抗运动先验（AMP）[1] 提高机器人运动的自然性与拟人性。

AMP 利用参考运动数据训练判别器，区分参考运动与策略生成的状态转移，并将判别结果转换为运动风格奖励。

训练过程中，将 AMP 风格奖励与强化学习任务奖励结合，使策略同时优化运动任务性能与动作自然性，减少不协调或不符合参考运动风格的动作。

### 3.3 Sim2Real 部署

在仿真环境中完成策略训练与测试后，将学习得到的运动控制策略部署至自研人形机器人。

部署过程中，重点处理仿真与实机之间的状态观测、关节映射、控制时序及执行器响应差异，提高策略在真实硬件上的执行稳定性。

最终通过实机行走与奔跑实验，验证运动控制策略的可部署性、稳定性及拟人化运动效果。

## 4. Demo 展示

以下视频展示了运动控制策略从物理仿真验证到自研人形机器人实机部署的过程，包括仿真环境中的行走与奔跑，以及真实机器人上的运动控制效果。

<video controls playsinline preload="metadata">
  <source src="/files/projects/humanoid-locomotion.mp4" type="video/mp4">
  当前浏览器不支持视频播放。
</video>

[单独打开演示视频](/files/projects/humanoid-locomotion.mp4)

## 参考文献

[1] PENG X B, MA Z, ABBEEL P, et al. AMP: Adversarial Motion Priors for Stylized Physics-Based Character Control[J]. *ACM Transactions on Graphics*, 2021, 40(4): Article 144. [https://doi.org/10.1145/3450626.3459670](https://doi.org/10.1145/3450626.3459670).

[2] ZHAO H, CATHOMEN R, GULICH L, et al. AGILE: A Comprehensive Workflow for Humanoid Loco-Manipulation Learning[EB/OL]. (2026-03-20)[2026-10-14]. [https://arxiv.org/abs/2603.20147](https://arxiv.org/abs/2603.20147).

[3] OPEN-X-HUMANOID. TienKung-Lab: Direct IsaacLab Workflow for TienKung[EB/OL]. [2026-10-14]. [https://github.com/Open-X-Humanoid/TienKung-Lab](https://github.com/Open-X-Humanoid/TienKung-Lab).

[4] 0ARTANIS0. LearningHumanoidRunning[EB/OL]. [2026-10-14]. [https://github.com/0artanis0/LearningHumanoidRunning](https://github.com/0artanis0/LearningHumanoidRunning).

<p class="report-nav"><a href="/">← 返回 Chao Tan 主页</a></p>
