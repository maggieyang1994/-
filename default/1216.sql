--  查找email 出现次数 > 1 的数据 group by + having
select email from trip.email  group by email having count(email) > 1

--  Mysql limit offset示例 实现分页  
select * from student limit 9,4;
select * from student limit 4 offset 9

-- 第二高的薪水  
select ifnull((select distinct Salary from Employee  order by Salary desc limit 1 offset 1), null) as SecondHighestSalary 