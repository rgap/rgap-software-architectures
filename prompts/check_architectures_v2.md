Analiza mi proyecto <nombre_del_proyecto> según la clasificación <clasificacion> de arquitecturas de software.

Considera estas condiciones:

* El frontend <frontend> y backend <backend> ya están conectados.
* El frontend consume una API real del backend.
* No considerar `localStorage` como persistencia principal de datos.
* Si `localStorage` existe, considéralo solo como detalle secundario de UI, por ejemplo tema visual.
* Separa la respuesta en 3 secciones:

  * Arquitectura general
  * Frontend
  * Backend

Usa exactamente el formato de respuesta <formato_respuesta>.

<formato_respuesta>

# 1. Arquitectura general de <nombre_del_proyecto>

Explica brevemente cómo se comunica el sistema completo.

Incluye un diagrama simple en texto con este formato:

Frontend
↓ HTTP / REST
Backend API
↓ SQL / ORM / Driver
Database

Luego coloca una tabla con estas columnas de las que sigue y las que sigue parcialmente:

| Clasificación | ¿<nombre_del_proyecto> la sigue? | Por qué           |
| ------------- | -------------------------------: | ----------------- |
| ...           |                Sí / No / Parcial | Explicación corta |

## Resumen general

Incluye una estructura tipo árbol con las arquitecturas que sí sigue.

---

# 2. Frontend

Describe el frontend según la clasificación.

Incluye una tabla con estas columnas de las que sigue y las que sigue parcialmente:

| Clasificación |        ¿La sigue? | Evidencia en el proyecto               | Qué es en corto |
| ------------- | ----------------: | -------------------------------------- | ---------- |
| ...           | Sí / No / Parcial | Carpeta, archivo, patrón o explicación | ... |

---

## Lo que más representa al frontend

Incluye una estructura tipo árbol con los estilos, patrones u organizaciones que más aplican al frontend.

---

## Variante exacta del frontend

Incluye una etiqueta corta como:

Component-Based React SPA
  
Luego incluye una descripción más completa como:

Component-Based React SPA (Single Page Application)

---

## Organización de código frontend

Indica si el frontend usa principalmente:

Package by Layer

o:

Package by Feature

y explica por qué.

---

## En términos de capas frontend

Incluye una estructura como esta:

Routes / Pages
Components
Providers / Contexts
Services
Models

Termina la sección indicando si el frontend sigue Clean Architecture estricta o que mezcla.

---

# 3. Backend

Describe el backend según la clasificación.

Incluye primero el flujo principal:

routes
↓
controllers
↓
services
↓
repositories
↓
database

Luego coloca una tabla con estas columnas de las que sigue y las que sigue parcialmente:

| Clasificación |        ¿La sigue? | Evidencia en el proyecto               | Qué es en corto |
| ------------- | ----------------: | -------------------------------------- | ---------- |
| ...           | Sí / No / Parcial | Carpeta, archivo, patrón o explicación | ... |

---

## Lo que más representa al backend

Incluye una estructura tipo árbol con los estilos, patrones u organizaciones que más aplican al backend.

---

## Variante exacta del backend

Incluye una etiqueta corta como:

Layered Monolithic REST API

Luego incluye una descripción más completa como:

Monolithic REST API with N-Layer Architecture using API / Controller / Service / Repository / Database layers

---

## Organización de código backend

Indica si el backend usa principalmente:

Package by Layer

o:

Package by Feature

y explica por qué.

---

## En términos de capas backend

Incluye una estructura como esta:

Routes
Controllers
Services
Repositories
Database

Termina la sección indicando si el backend sigue Clean Architecture estricta o que mezcla.

---

# Conclusión corta

Termina con un resumen tipo árbol:

Arquitectura general
Frontend
Backend

Y finalmente agrega una frase final de este estilo:

> <nombre_del_proyecto> es una aplicación ecommerce full-stack de arquitectura ..., con frontend ..., y backend ...

</formato_respuesta>


# Variables del prompt plantilla

<clasificacion>
Architectural Styles
  Runtime Interaction Styles
    Communication Patterns
      Request Response
      Publish Subscribe

    Runtime Structure Styles
      Client Server
      Pipe and Filter
      Event Driven
      Peer to Peer

  Deployment System Composition Styles
    Monolith
    Modular Monolith

    Tiered Architectures
      2-Tier Architecture
      3-Tier Architecture
      N-Tier Architecture

    Distributed Service Architectures
      Service Oriented Architecture
      Microservices

    Specialized Deployment Styles
      Serverless

  Internal Application Structure Styles
    Layered Architecture
      2-Layer Architecture
      3-Layer Architecture
      N-Layer Architecture

      Common 3-Layer Variants
        Presentation Business Data
        UI Business Data
        Controller Service Repository
        API Service Repository

      Common N-Layer Variants
        Presentation Application Domain Infrastructure
        Presentation Application Domain Persistence
        API Application Domain Infrastructure Persistence

      Layering Rule Variants
        Strict Layered Architecture
        Relaxed Layered Architecture
        Closed Layered Architecture
        Open Layered Architecture

    Component Based Architecture
    Microkernel / Plugin Architecture
    Data Centered Architecture

Architectural Patterns
  Boundary and Dependency Patterns
    Clean Architecture
    Hexagonal Architecture / Ports and Adapters
    Onion Architecture
    Screaming Architecture

  UI Architectural Patterns
    MVC
    MVP
    MVVM
    PAC
    HMVC

  Distributed Systems / Integration / Data Consistency Patterns
    API Gateway
    Backend for Frontend
    CQRS
    Event Sourcing
    Saga
    Anti Corruption Layer

  Resilience Patterns
    Circuit Breaker

  Migration / Modernization Patterns
    Strangler Fig

Code Organization
  Basic Monolith Layouts
    Single File Monolith
    Flat Monolith

  Package by Layer
    Layered by Type
    Classic Layered Folders

  Package by Feature
    Vertical Feature Slices
    Route Colocated Feature Structure
    Feature Modules with Public API

  Domain-Oriented Organization
    Package by Domain
    Package by Bounded Context
    Package by Subdomain
    Package by Aggregate
    Domain Module with Internal Layers

  Hybrid Approaches
    Feature First with Internal Layers
    Domain Modules with Shared Kernel
    Route First with Shared Modules

  Frontend Component Organization
    Atomic Design
    Component First Organization
    Route Based Organization
    Feature Based Organization
</clasificacion>

<nombre_del_proyecto>
EL NOMBRE DEL PROYECTO
<nombre_del_proyecto> 

<frontend>
AQUÍ PEGO LA ESTRUCTURA Y CÓDIGO DEL FRONTEND
</frontend>

<backend>
AQUÍ PEGO LA ESTRUCTURA Y CÓDIGO DEL BACKEND
</backend>
