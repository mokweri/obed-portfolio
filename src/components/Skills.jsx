import React from 'react';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h1 className="section-title bottom-space-medium">What I do</h1>
        <div className="grid grid-3-col grid-start-v">
          <div className="skill-card">
            <div className="row flex-gap-tiny grid-center-v">
              <ion-icon
                className="skill-icon"
                name="hardware-chip-outline"
              ></ion-icon>
              <h3 className="skill-card-title">Embedded Systems</h3>
            </div>
            <ul className="skill-list">
              <li>Firmware development (C/C++).</li>
              <li>MCU families: Arduino, AVR, STM32, and ESP32.</li>
              <li>MCU protocols: SPI, UART, I2C, CAN, BLE.</li>
              <li>Sensor and actuator interfacing.</li>
              <li>Real-Time Operating Systems: FreeRTOS.</li>
              <li>Low power and resource efficient design.</li>
            </ul>
            <div className="row tools">
              <a className="tool-link" href="https://www.arduino.cc/">
                <img
                  className="tool-logo"
                  src="/img/skills/arduino.png"
                  alt="arduino logo"
                />
              </a>
              <a className="tool-link" href="https://www.st.com/">
                <img
                  className="tool-logo"
                  src="/img/skills/st.png"
                  alt="st microelectronics logo"
                />
              </a>
              <a className="tool-link" href="#">
                <img
                  className="tool-logo"
                  src="/img/skills/esp.jpg"
                  alt="espressif logo"
                />
              </a>
              <a className="tool-link" href="#">
                <img
                  className="tool-logo"
                  src="/img/skills/freertos.png"
                  alt="freertos logo"
                />
              </a>
            </div>
          </div>
          <div className="skill-card">
            <div className="row flex-gap-tiny grid-center-v">
              <ion-icon className="skill-icon" name="construct-outline"></ion-icon>
              <h3 className="skill-card-title">Hardware</h3>
            </div>
            <ul className="skill-list">
              <li>Digital & analog circuit design.</li>
              <li>PCB design - Altium Designer</li>
              <li>Hardware debugging, simulation and testing</li>
              <li>Lab equipment: Multimeter, Oscilloscope, & Logic analyzers.</li>
              <li>Hands-on soldering and rework.</li>
              <li>Debugging: SWD, JTAG, and SEGGER.</li>
            </ul>
            <div className="row tools">
              <a className="tool-link" href="https://www.altium.com/altium-designer">
                <img
                  className="tool-logo"
                  src="/img/skills/altium.png"
                  alt="Altium designer logo"
                />
              </a>
            </div>
          </div>
          <div className="skill-card">
            <div className="row flex-gap-tiny grid-center-v">
              <ion-icon className="skill-icon" name="code-slash-outline"></ion-icon>
              <h3 className="skill-card-title">Programming</h3>
            </div>
            <ul className="skill-list">
              <li>Programming in C, C++, Python, and JavaScript.</li>
              <li>Web technologies: HTML5, CSS, JS, NodeJS.</li>
              <li>Keen on clean and efficient code.</li>
              <li>Version control and collaboration - Git.</li>
              <li>Documentation</li>
            </ul>
            <div className="row tools">
              <a className="tool-link" href="https://en.cppreference.com/w/c/language">
                <img className="tool-logo" src="/img/skills/c.png" alt="C language logo" />
              </a>
              <a className="tool-link" href="https://en.cppreference.com/w/cpp/language">
                <img className="tool-logo" src="/img/skills/cpp.png" alt="C++ language logo" />
              </a>
              <a className="tool-link" href="https://www.python.org/">
                <img className="tool-logo" src="/img/skills/python.png" alt="Python language logo" />
              </a>
              <a
                className="tool-link"
                href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
              >
                <img className="tool-logo" src="/img/skills/html.png" alt="html logo" />
              </a>
              <a className="tool-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <img className="tool-logo" src="/img/skills/css.png" alt="css logo" />
              </a>
              <a className="tool-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <img className="tool-logo" src="/img/skills/js.png" alt="JavaScript logo" />
              </a>
            </div>
          </div>
          <div className="skill-card">
            <div className="row flex-gap-tiny grid-center-v">
              <ion-icon className="skill-icon" name="watch-outline"></ion-icon>
              <h3 className="skill-card-title">Embedded ML</h3>
            </div>
            <ul className="skill-list">
              <li>Machine Learning and Deep Neural Networks.</li>
              <li>Frameworks: TensorFlow-Keras, PyTorch.</li>
              <li>CNN pruning and quantization.</li>
              <li>TensorFlowLite, TensorRT, & Edge Impulse.</li>
              <li>Raspberry Pi, Jetson SBCs, & ESP32.</li>
            </ul>
            <div className="row tools">
              <a className="tool-link" href="https://www.tensorflow.org/lite">
                <img className="tool-logo" src="/img/skills/tflite.png" alt="Tensorflow lite logo" />
              </a>
              <a className="tool-link" href="https://developer.nvidia.com/embedded-computing">
                <img className="tool-logo" src="/img/skills/jetson.png" alt="Nvidia jetson logo" />
              </a>
              <a className="tool-link" href="https://www.raspberrypi.org/">
                <img className="tool-logo" src="/img/skills/raspberry.png" alt="Raspberry pi logo" />
              </a>
              <a className="tool-link" href="https://edgeimpulse.com/">
                <img className="tool-logo" src="/img/skills/edge-impulse.png" alt="Edge impulse logo" />
              </a>
            </div>
          </div>
          <div className="skill-card">
            <div className="row flex-gap-tiny grid-center-v">
              <ion-icon className="skill-icon" name="hardware-chip-outline"></ion-icon>
              <h3 className="skill-card-title">FPGA Design</h3>
            </div>
            <ul className="skill-list">
              <li>Hardware Description Languages: VHDL, Verilog.</li>
              <li>High-Level Synthesis (HLS) and OpenCL for FPGA acceleration.</li>
              <li>FPGAs tools: Vivado, Vitis-HLS, Vitis IDE.</li>
              <li>Hardware-software co-design - Algorithm and AI acceleration on FPGA</li>
            </ul>
            <div className="row tools">
              <a className="tool-link" href="#">
                <img className="tool-logo" src="/img/skills/xilinx.png" alt="Xilinx logo" />
              </a>
              <a className="tool-link" href="https://www.xilinx.com/products/boards-and-kits.html">
                <img className="tool-logo" src="/img/skills/zynq.png" alt="Zynq logo" />
              </a>
            </div>
          </div>
          <div className="skill-card">
            <div className="row flex-gap-tiny grid-center-v">
              <ion-icon className="skill-icon" name="rocket-outline"></ion-icon>
              <h3 className="skill-card-title">Product Development</h3>
            </div>
            <ul className="skill-list">
              <li>Indepth online or personalized training.</li>
              <li>Multiple domains: IoT, DSP, computer vision, agriculture, home or industrial automation, & consumer products.</li>
              <li>Rapid prototyping.</li>
              <li>Continuous innovation and research.</li>
            </ul>
            <div className="row tools">
              <a className="tool-link" href="https://github.com/mokweri">
                <img className="tool-logo" src="/img/skills/git.png" alt="Github logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
