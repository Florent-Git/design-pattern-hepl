import React, { useState } from "react";
import Sketch from "react-p5";
import p5Types from "p5";
import { roughSizeOfObject } from "../utils/ObjectSize";
import { filesize } from "filesize";

interface Particle {
    velocity: p5Types.Vector
    color: p5Types.Color
    position: p5Types.Vector
}

export function FlyweightPage() {
    const particles: Particle[] = [];

    let button;

    function setup(p5: p5Types, canvas: Element) {
        p5.createCanvas(800, 600)
            .parent(canvas);

        button = p5.createButton("Add unoptimized");
        button.position(0, 0);
        button.mousePressed(() => {
            particles.push({
                color: p5.color(10, 20, 30),
                velocity: p5.createVector((Math.random() * 2) - 1, (Math.random() * 2) - 1),
                position: p5.createVector(400, 200)
            })
        });
    }

    function draw(p5: p5Types) {
        p5.background(0);

        p5.stroke(255);
        p5.fill(255);
        if (particles.length !== 0) {
            p5.text(
                filesize(particles.map(roughSizeOfObject).reduce((a, b) => a + b)).toString(),
                0, 100
            )
        }

        particles.forEach(particle => {
            p5.stroke(particle.color)
            p5.ellipse(particle.position.x, particle.position.y, 5, 5)
            p5.stroke(255)

            particle.position.x += particle.velocity.x;
            particle.position.y += particle.velocity.y;
        });
    }

    return (
        <Sketch setup={setup} draw={draw} />
    )
}
