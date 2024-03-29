---
title: Millenium Falcon
date: '2019-11-07'
description: 'A space game that utilizes graph theory, designed for a project in a basic algorithms and data structures course'
github: https://github.com/stellaw1/MillenniumFalcon
img: millenium-thumbnail.jpg
tags:
    - Java
    - Graphs
---

![millenium](/images/projects/millenium.png)

## Background

_Source: UBC CPEN 221 Fall term_
_Author: Sathish Gopalakrishnan_

In a galaxy far far away...

The Red October is a specialized spice mining planet rover that has been smuggled away to the planet of Kamino. Han Solo and Chewbacca have been tasked with retrieving the Red October. The catch is that the planet Kamino has been erased from all known records so Han and Chewie have to fly the Millennium Falcon from planet to planet, following the tracking signal emitted by the Red October. The further a planet is from Kamino the weaker is the signal from lost rover. At each planet, Han and Chewie obtain signal strengths from all the neighbouring planets and have to decide how to retrieve the rover without wasting too much fuel. The first stage of the mission is the hunt for Red October.

After locating Kamino and securing the Red October, the Millennium Falcon crew have been instructed to retrieve as much of the valuable spice _melange_ (believe to enable super-powers) as they can on the trip back to Earth. (Who knows why Earth.) Their goal on the return leg is to collect as much of the spice as possible with the limited fuel reserves they have available. The second stage of the mission is the spice gathering stage.

Your goal is to embed the Millennium Falcon with specialized hunt-and-gather intelligence so that the spaceship can find Kamino and return to Earth with as much spice as possible. Finding Kamino and returning to Earth are essential; the more spice one gathers the better.

## Process

<h2> Part 1: </h2>
We designed a Graph ADT that represents a graph object that has vertices and edges with weights associated with them. We implemented methods for finding the shortest path, minimum spanning tree, and diameter, etc. for the graph. 
<h2> Part 2: </h2>
Using the Graph ADT, we developed a 'gathering' and 'seeking' method for Millenium Falcon spaceship to find the shortest path back planet to planet while gathering the most spices along its way. 
<h2> Part 3: </h2>
We used a GUI in IntelliJ to test and verify the efficiency and accuracy of our methods and used Gradle to test our code.

## Code

[GitHub repo](https://github.com/CPEN-221-2019/f19-mp2-stellaw1-davidw0311) is private for academic policy issues

## Lessons

Learnt about graph theory (nodes, edges, and weight) and various algorithms, such as Dijkstra's shortest path algorithm and Kruskal's minimum spanning tree algorithm.
