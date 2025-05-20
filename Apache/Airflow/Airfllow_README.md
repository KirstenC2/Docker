# Airflow

## What is Airflow?

- developing, scheduling, and monitoring batch-oriented workflows
- provides a web-based GUI to visualizes, manages and debug the workflows

### DAGs in Airflow

 DAG (Directed Acyclic Graph) is a Python file that defines a workflow of tasks, their execution order, schedule, and other configuration.

### Relationship with Operators

An Operator is conceptually a template for a predefined Task -- Official website

Each DAG task will is associated with an operator, and the operator will define how and what the task should perform.
**Operator only define, but don't execute**

```
with DAG("my-dag") as dag:
    ping = HttpOperator(endpoint="http://example.com/update/")
    email = EmailOperator(to="admin@example.com", subject="Update complete")

    ping >> email
```

Airflow provides a number of operators, such as:
<br>
[ Python Operators ]

- refer to the hello_world.py, the PythonOperator has been used to tell the task that this is a python task.

[ Bash Operators]

- 