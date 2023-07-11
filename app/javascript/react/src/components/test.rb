# # instance variable @ 


# class Car 
#     @@car_number = 0
#     HELLO = 'meow'

#     def initialize
#         @@car_number += 1 
#     end

#     def features 
#         @year = 2021 
#         @company = 'Suzuki'
#         puts "#{@year }& #{@company} and #@@car_number #{HELLO}"
#     end

#     HELLO = 'bhow'

# end


# # car1 = Car.new()

# # car1.features

# #inheritance ---->>>>>>>


# class Shape 
#     def name 
#         puts 'Shape : '
#     end
# end

# class Triangle < Shape 

#     def initialize(height, base)
#         @area = 0.5 * height * base
#     end

#     def area 
#         puts @area 
#     end 
# end

# t1 = Triangle.new(2,5)

# t1.area 
# t1.name


# # --- question on inheriitance

# class Person 

#     def initialize(name,age)
#         @name = name 
#         @age = age 
#     end

#     def introduce 
#         puts "Hello my name is #@name and my age is #@age"
#     end
# end


# class Student < Person 
#     def initialize(name,age,grade)
#         # super(name,age)
#         @grade = grade 
#     end

#     def introduce 
#         puts "Hello my name is #@name and my age is #@age and my grade is #@grade"
#     end
# end

# class Teacher < Person 
# end

# s1 = Student.new('mikki',23,98)

# s1.introduce



# Ruby Program to demonstrate the
# use of super method

#!/usr/bin/ruby

# base class
# class Geeks_1
	
# 	# method of superclass accepting
# 	# two parameter
# 	def display a = 0, b = 0
# 		puts "Parent class, 1st Argument: #{a}, 2nd Argument: #{b}"
# 	end
# end

# # derived class Geeks_2
# class Geeks_2 < Geeks_1

# 	# subclass method having the same name
# 	# as superclass
# 	def display a, b
		
# 		# calling the superclass method
# 		# by default it will pass
# 		# both the arguments
# 		super
		
# 		# passing only one argument
# 		super a
		
# 		# passing both the argument
# 		super a, b
		
# 		# calling the superclass method
# 		# by default it will not pass
# 		# both the arguments
# 		super()
		
# 		puts "Hey! This is subclass method"
# 	end
# end

# # creating object of derived class
# obj = Geeks_2.new

# # calling the method of subclass
# obj.display "Sudo_Placement", "GFG"


class Car
  @@total_cars = 0

  def initialize
    @@total_cars += 1
  end

  def number_of_cars 
	@@total_cars
  end
#   def self.total_cars
#     @@total_cars
#   end
end

car1 = Car.new
car2 = Car.new

p car2.number_of_cars()
