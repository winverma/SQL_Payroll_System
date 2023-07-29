-- Employee Information Management
CREATE TABLE employees (
  employee_id NUMBER,
  first_name VARCHAR2(50),
  last_name VARCHAR2(50),
  department_id NUMBER,
  hire_date DATE,
  basic_pay NUMBER,
  -- Additional employee details...
);

-- Salary Components
CREATE TABLE salary_components (
  component_id NUMBER,
  component_name VARCHAR2(50),
  -- Additional component details...
);

-- Tax Rates
CREATE TABLE tax_rates (
  tax_rate_id NUMBER,
  start_date DATE,
  end_date DATE,
  min_salary NUMBER,
  max_salary NUMBER,
  tax_percentage NUMBER,
  -- Additional tax rate details...
);

-- Insert sample data into employees table
INSERT INTO employees (employee_id, first_name, last_name, department_id, hire_date, basic_pay)
VALUES
  (1, 'Rahul', 'Sharma', 101, TO_DATE('2022-01-01', 'YYYY-MM-DD'), 50000),
  (2, 'Priya', 'Patel', 102, TO_DATE('2021-05-15', 'YYYY-MM-DD'), 60000),
  (3, 'Amit', 'Singh', 101, TO_DATE('2023-03-10', 'YYYY-MM-DD'), 45000);

-- Insert sample data into tax_rates table
INSERT INTO tax_rates (tax_rate_id, start_date, end_date, min_salary, max_salary, tax_percentage)
VALUES
  (1, TO_DATE('2021-01-01', 'YYYY-MM-DD'), TO_DATE('2021-12-31', 'YYYY-MM-DD'), 0, 25000, 0),
  (2, TO_DATE('2021-01-01', 'YYYY-MM-DD'), TO_DATE('2021-12-31', 'YYYY-MM-DD'), 25001, 50000, 10),
  (3, TO_DATE('2021-01-01', 'YYYY-MM-DD'), TO_DATE('2021-12-31', 'YYYY-MM-DD'), 50001, NULL, 20);

-- Function to calculate employee salary
CREATE OR REPLACE FUNCTION calculate_salary(
    p_employee_id IN NUMBER,
    p_month IN NUMBER,
    p_year IN NUMBER
)
RETURN NUMBER
IS
  v_basic_pay NUMBER;
  v_allowances NUMBER := 0; -- Placeholder, include logic for allowance calculation
  v_deductions NUMBER := 0; -- Placeholder, include logic for deduction calculation
  v_total_salary NUMBER;
BEGIN
  -- Calculate basic pay
  SELECT basic_pay
  INTO v_basic_pay
  FROM employees
  WHERE employee_id = p_employee_id;

  -- Calculate total salary
  v_total_salary := v_basic_pay + v_allowances - v_deductions;

  RETURN v_total_salary;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    RETURN NULL;
END;

-- Function to calculate tax amount
CREATE OR REPLACE FUNCTION calculate_tax(
    p_salary IN NUMBER
)
RETURN NUMBER
IS
  v_tax_percentage NUMBER;
  v_tax_amount NUMBER;
BEGIN
  SELECT tax_percentage
  INTO v_tax_percentage
  FROM tax_rates
  WHERE p_salary >= min_salary
    AND (p_salary <= max_salary OR max_salary IS NULL);

  v_tax_amount := p_salary * (v_tax_percentage / 100);

  RETURN v_tax_amount;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    RETURN NULL;
END;

-- Payroll Processing
CREATE OR REPLACE PROCEDURE process_payroll(
    p_month IN NUMBER,
    p_year IN NUMBER
)
IS
  v_employee_id NUMBER;
  v_salary NUMBER;
  v_tax_amount NUMBER;
  v_net_salary NUMBER;
BEGIN
  FOR employee_rec IN (SELECT employee_id FROM employees)
  LOOP
    v_employee_id := employee_rec.employee_id;
    
    -- Calculate salary for each employee
    v_salary := calculate_salary(v_employee_id, p_month, p_year);

    -- Calculate tax amount
    v_tax_amount := calculate_tax(v_salary);

    -- Calculate net salary (after tax deduction)
    v_net_salary := v_salary - v_tax_amount;

    -- Print employee details and salary information
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || v_employee_id);
    DBMS_OUTPUT.PUT_LINE('Name: ' || (SELECT first_name || ' ' || last_name FROM employees WHERE employee_id = v_employee_id));
    DBMS_OUTPUT.PUT_LINE('Salary: ' || v_salary);
    DBMS_OUTPUT.PUT_LINE('Tax Amount: ' || v_tax_amount);
    DBMS_OUTPUT.PUT_LINE('Net Salary: ' || v_net_salary);
    DBMS_OUTPUT.PUT_LINE('-------------------------------');
  END LOOP;
END;
