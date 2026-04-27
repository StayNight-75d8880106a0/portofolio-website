export const leetcodeProblems = [
    {
        id: 1,
        title: "Single Number",
        difficulty: "Easy",
        category: "Hash Map",
        description:
            "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
        approach: [
            "Use a hash map to count the frequency of each number",
            "Traverse the array and increment occurrences",
            "Return the number whose frequency is exactly one",
        ],
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        uniqueInsight:
            "This problem subtly exposes the philosophical difference between information preservation and information elimination. Hashing preserves full frequency information, while XOR-based solutions deliberately erase redundant data to reveal invariants.",
        lesson:
            "Hash maps provide a straightforward and readable solution, though they trade constant-space optimality for clarity.",
        conclusion:
            "From a software engineering perspective, the hash map approach represents an explicit and information-complete strategy. While it does not satisfy the strictest theoretical space constraints, it maximizes interpretability and debuggability, which are often decisive factors in real-world systems.",
        language: "Go",
        code: `
func singleNumber(nums []int) int {
    single := make(map[int]int)

    for _, value := range nums {
        single[value]++
    }

    for key := range single {
        if single[key] == 1 {
            return key
        }
    }
    return 0
}
    `.trim(),
    },
    {
        id: 2,
        title: "Single Number II",
        difficulty: "Medium",
        category: "Hash Map",
        description:
            "Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.",
        approach: [
            "Maintain a hash map to store frequency counts",
            "Traverse the array and increment each value count",
            "Identify and return the element with frequency one",
        ],
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        uniqueInsight:
            "Unlike its XOR-based counterpart, this solution treats frequency as first-class data. This framing aligns more closely with database-style aggregation than with bitwise algebra.",
        lesson:
            "Although bitwise solutions exist, frequency counting remains an intuitive baseline for correctness-first implementations.",
        conclusion:
            "This solution demonstrates that algorithmic optimality is multi-dimensional. While it sacrifices constant auxiliary space, it offers semantic clarity and deterministic behavior, which are valuable properties in maintainable and verifiable systems.",
        language: "Go",
        code: `
func singleNumber(nums []int) int {
    single := make(map[int]int)

    for _, value := range nums {
        single[value]++
    }

    for key := range single {
        if single[key] == 1 {
            return key
        }
    }
    return 0
}
    `.trim(),
    },
    {
        id: 3,
        title: "Single Number III",
        difficulty: "Medium",
        category: "Hash Map",
        description:
            "Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.",
        approach: [
            "Use a hash map to record frequency of each element",
            "Iterate through the map to find values with frequency one",
            "Collect and return the two unique elements",
        ],
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        uniqueInsight:
            "This problem highlights the tension between algebraic minimalism (XOR partitioning) and epistemic completeness. The hash map solution retains the entire statistical distribution of the dataset, not just the final answer.",
        lesson:
            "This solution prioritizes determinism and clarity over strict adherence to constant-space constraints.",
        conclusion:
            "The implemented solution effectively identifies the two unique elements within a dataset where all other elements occur in pairs. By leveraging a hash map to record frequency counts, the algorithm ensures deterministic retrieval of elements with singular occurrence. While asymptotically optimal in time, it introduces non-constant space overhead. Nonetheless, it serves as a pedagogically sound and maintainable baseline, upon which XOR-based refinements can later be constructed to satisfy stricter theoretical constraints.",
        language: "Go",
        code: `
func singleNumber(nums []int) []int {
    single := make(map[int]int)

    for _, value := range nums {
        single[value]++
    }

    result := []int{}

    for key, _ := range single {
        if single[key] == 1 {
            result = append(result, key)
        }
    }

    return result
}
    `.trim(),
    },
    {
        id: 4,
        title: "Missing Number",
        difficulty: "Easy",
        category: "Sorting / Array",
        description:
            "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
        approach: [
            "Sort the array in ascending order",
            "Iterate while tracking the expected value",
            "Return the first mismatch or n if all values are present",
        ],
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(1)",
        uniqueInsight:
            "Sorting acts as an entropy-reduction mechanism. By enforcing order, the problem transitions from probabilistic search to deterministic verification.",
        lesson:
            "Sorting reduces problem entropy, making sequence validation intuitive, even if it sacrifices linear-time optimality.",
        conclusion:
            "While linear-time solutions using arithmetic summation or XOR exist, the sorting-based approach emphasizes cognitive simplicity and structural reasoning. This trade-off exemplifies a broader engineering principle: solutions that are marginally slower asymptotically may still be preferable when they enhance readability, correctness assurance, and long-term maintainability.",
        language: "Go",
        code: `
func missingNumber(nums []int) int {
    sort.Ints(nums)
    var Missing int

    for i := 0; i < len(nums); i++ {
        if Missing == nums[i] {
            Missing++
        } else {
            return i
        }
    }

    return Missing
}
    `.trim(),
    },
    {
        id: 5,
        title: "Fibonacci Number",
        difficulty: "Easy",
        category: "Recursion",
        description:
            "The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.",
        approach: [
            "Handle base cases n = 0 and n = 1",
            "Recursively compute fib(n-1) + fib(n-2)",
        ],
        timeComplexity: "O(2^n)",
        spaceComplexity: "O(n)",
        uniqueInsight:
            "Naive recursion exposes the computational cost of elegance. The mathematical definition is concise, but its direct execution reveals exponential redundancy.",
        lesson:
            "Naive recursion highlights overlapping subproblems and motivates optimization via memoization or iteration.",
        conclusion:
            "This implementation serves less as a practical algorithm and more as a didactic artifact. It illustrates the gap between mathematical specification and computational execution, thereby motivating dynamic programming as a necessary bridge between theory and efficient practice.",
        language: "Go",
        code: `
func fib(n int) int {
    if n == 0 {
        return 0
    }
    if n == 1 {
        return 1
    }
    return fib(n-1) + fib(n-2)
}
    `.trim(),
    }, {
        id: 6,
        title: "Divide Two Integers",
        difficulty: "Medium",
        category: "Bit Manipulation",
        description:
            "Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator. The integer division should truncate toward zero.",
        approach: [
            "Handle overflow edge cases (e.g., INT_MIN divided by -1)",
            "Determine the sign of the result based on input polarities",
            "Convert operands to floating-point or absolute values for processing",
            "Apply 32-bit signed integer constraints to the final quotient",
        ],
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)",
        uniqueInsight:
            "This problem serves as a boundary test for data type limitations. While the goal is to simulate division, the real challenge lies in navigating the asymmetric range of 32-bit signed integers, where the absolute value of the minimum integer exceeds the maximum.",
        lesson:
            "Pragmatic solutions sometimes leverage high-level language features (like float64) to bypass manual bit-shifting, though true algorithmic rigor often demands bitwise subtraction.",
        conclusion:
            "The implemented solution utilizes a pragmatic approach by leveraging float64 casting to handle the division and truncation. While the problem's spirit often invites bitwise manipulation, this strategy ensures precision within the 32-bit environment while maintaining code conciseness. It highlights an important engineering trade-off: choosing between low-level manual bit-arithmetic and the robustness of built-in type conversions to satisfy strict boundary conditions.",
        language: "Go",
        code: `
func divide(dividend int, divisor int) int {
    const MaxInt32 = 2147483647
    const MinInt32 = -2147483648

    var result float64

    result = float64(dividend) / float64(divisor)

    if result > float64(MaxInt32) {
        return MaxInt32
    }
    
    if result < float64(MinInt32) {
        return MinInt32
    }

    return int(result)
}
    `.trim(),
    }, {
        id: 7,
        title: "Find Target Indices After Sorting Array",
        difficulty: "Easy",
        category: "Sorting / Array",
        description:
            "You are given a 0-indexed integer array nums and a target element target. A target index is an index i such that nums[i] == target. Return a list of the target indices of nums after sorting nums in non-decreasing order.",
        approach: [
            "Sort the input array in non-decreasing order using a built-in sorting algorithm",
            "Initialize an empty result slice to store the target indices",
            "Iterate through the sorted array and compare each element with the target",
            "Append the current index to the result list whenever a match is found",
        ],
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",
        uniqueInsight:
            "Sorting transforms the array from a state of high entropy to a structured sequence, where identical elements are forced into a contiguous block. This structural alignment allows the search for indices to become a simple linear traversal, where the order of discovery naturally satisfies the requirement for sorted output.",
        lesson:
            "Leveraging built-in sorting functions often provides the best balance between implementation speed and runtime efficiency for standard-sized datasets.",
        conclusion:
            "The implemented solution serves as a classic example of the 'Sort-then-Process' pattern. By first reducing the problem's complexity through an O(n log n) sort, the subsequent extraction of indices becomes trivial. While a linear-time O(n) solution is theoretically possible by counting elements smaller than and equal to the target, the sorting approach offers superior readability and utilizes highly optimized standard library functions, making it a robust choice for practical software development.",
        language: "Go",
        code: `
func targetIndices(nums []int, target int) []int {
    sort.Ints(nums)

    var result []int

    for key, value := range nums {
        if value == target {
            result = append(result, key)
        }
    }

    return result
}
    `.trim(),
    }, {
        id: 8,
        title: "Sum of Unique Elements",
        difficulty: "Easy",
        category: "Hash Map",
        description:
            "You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array. Return the sum of all the unique elements of nums.",
        approach: [
            "Initialize a hash map to track the frequency of each integer",
            "Perform a first pass over the array to populate the frequency table",
            "Iterate through the map entries to identify elements with a count of exactly one",
            "Accumulate and return the sum of these unique keys",
        ],
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        uniqueInsight:
            "This problem illustrates the decoupling of **state capture** (frequency counting) from **logic execution** (summation). By treating the dataset as a frequency distribution rather than a mere sequence, we transform a potential search problem into a direct lookup task.",
        lesson:
            "When uniqueness is the criteria, a frequency map is often the most robust tool, deliberately trading memory usage (Space) to eliminate complex nested iterations (Time).",
        conclusion:
            "The solution exemplifies the classic **Space-Time Trade-off** paradigm in algorithmic design. By allocating auxiliary memory for a Hash Map, the algorithm successfully avoids the quadratic complexity O(N²) of brute-force comparisons, achieving a deterministic linear time complexity of O(N). It demonstrates that strategically increasing the memory footprint is often the most effective way to minimize computational latency in frequency-based queries.",
        language: "Go",
        code: `
func sumOfUnique(nums []int) int {
    UniqueNumber := make(map[int]int)

    for _, value := range nums {
        UniqueNumber[value]++
    }

    var result int

    for key, value := range UniqueNumber {
        if value == 1 {
            result += key
        }
    }

    return result
}
    `.trim(),
    },
    {
        id: 9,
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        category: "Sorting / Array",
        description:
            "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
        approach: [
            "Allocate a new array large enough to store all elements from both input arrays",
            "Copy the contents of both arrays into this new array using the copy function",
            "Sort the combined array to ensure all elements are in the correct order",
            "If the total length is odd, return the element at the middle index",
            "If the total length is even, return the average of the two middle elements"
        ],
        timeComplexity: "O((m+n) log(m+n))",
        spaceComplexity: "O(m+n)",
        uniqueInsight:
            "This approach prioritizes conceptual simplicity and code readability. By merging and re-sorting, we treat the problem as a global ordering task rather than a pointer-based partitioning task, making the logic much easier to validate at the expense of theoretical peak performance.",
        lesson:
            "While the problem asks for O(log(m+n)), a merge-and-sort strategy provides a reliable baseline. It highlights the trade-off between brute-force merging and optimal divide-and-conquer strategies.",
        conclusion:
            "This solution is correct but emphasizes conceptual simplicity. It is like merging two sorted decks of cards into one big sorted deck and then drawing the card in the middle. While it doesn't meet the O(log(m+n)) constraint of a perfect binary search approach, it serves as a robust implementation that is easy to debug and maintain.",
        language: "Go",
        code: `
func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    result := make([]int, len(nums1)+len(nums2))
    copy(result, nums1)
    copy(result[len(nums1):], nums2)
    sort.Ints(result)

    mid1 := len(result)/2 - 1
    mid2 := len(result)/2

    if len(result)%2 == 0 {
        return float64(result[mid1]+result[mid2]) / 2
    }

    if len(result)%2 != 0 {
        return float64(result[len(result)/2])
    }

    return 0.0
}
    `.trim(),
    },
    {
        id: 10,
        title: "Add Two Integers",
        difficulty: "Easy",
        category: "Math",
        description:
            "Given two integers num1 and num2, return the sum of the two integers.",
        approach: [
            "Identify the two input integers provided as parameters",
            "Perform a direct arithmetic addition using the '+' operator",
            "Store the sum in a variable or return it directly as the result"
        ],
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)",
        uniqueInsight:
            "Integer addition embodies a deep interplay between hardware and abstraction. While it appears as a simple high-level command, it is realized by fundamental adder circuits and serves as the fastest CPU instruction, underpinning everything from memory addressing to complex linear algebra.",
        lesson:
            "This problem serves as a reminder that even the most basic primitives in computing carry significant theoretical weight, defining the commutative (Abelian) group operation that modern arithmetic is built upon.",
        conclusion:
            "The implementation is trivial, yet it highlights the efficiency of bit-level operations. On fixed-size machine words, this is treated as a constant-time operation, illustrating the peak of implementation efficiency in software engineering.",
        language: "Go",
        code: `
func sum(num1 int, num2 int) int {
    result := num1 + num2

    return result
}
    `.trim(),
    },
    {
        id: 11,
        title: "Sort Colors",
        difficulty: "Medium",
        category: "Sorting / Array",
        description:
            "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue (0, 1, and 2). You must solve this without using the library's sort function.",
        approach: [
            "Use a nested loop structure to implement the Bubble Sort algorithm",
            "The outer loop iterates through the entire array to repeat the comparison process",
            "The inner loop compares adjacent elements (nums[j] and nums[j+1])",
            "If the left element is greater than the right, swap them to move the larger value toward the end",
            "Reduce the inner loop range in each iteration as the end of the array becomes sorted"
        ],
        timeComplexity: "O(n^2)",
        spaceComplexity: "O(1)",
        uniqueInsight:
            "Bubble Sort aligns naturally with the 'sorting by appearance' requirement. By repeatedly bubbling the largest unsorted value (2, then 1) to the right, the array eventually settles into the required 0-1-2 sequence without needing complex partitioning logic.",
        lesson:
            "While Bubble Sort is often criticized for its quadratic time complexity, its simplicity and O(1) space usage make it an excellent pedagogical tool for understanding in-place swaps and stable sorting heuristics.",
        conclusion:
            "The solution successfully passes all 89 test cases, proving that for small constraints (n <= 300), an O(n^2) approach is computationally acceptable. However, it highlights a trade-off: while conceptually simple, it is asymptotically suboptimal compared to linear-time solutions like the Dutch National Flag algorithm.",
        language: "Go",
        code: `
func sortColors(nums []int) {
    for i := 0; i < len(nums); i++ {
        for j := 0; j < len(nums)-i-1; j++ {
            if nums[j] > nums[j+1] {
                nums[j], nums[j+1] = nums[j+1], nums[j]
            }
        }
    }
}
    `.trim(),
    },
    {
        id: 12,
        title: "Richest Customer Wealth",
        difficulty: "Easy",
        category: "Matrix",
        description:
            "You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank. Return the wealth that the richest customer has. A customer's wealth is the amount of money they have in all their bank accounts.",
        approach: [
            "Initialize a variable 'result' to store the maximum wealth found so far",
            "Iterate through each customer (row) in the 2D accounts matrix",
            "For each customer, reset a 'sum' variable and iterate through all their bank accounts (columns)",
            "Calculate the total wealth of the current customer by summing their bank balances",
            "Compare the current customer's wealth with 'result' and update it if the current wealth is higher"
        ],
        timeComplexity: "O(m × n)",
        spaceComplexity: "O(1)",
        uniqueInsight:
            "This solution follows a double reduction paradigm: first, it reduces each row (customer) to a single sum of wealth, and second, it reduces that collection of sums into a single maximum value. It is asymptotically optimal because every single bank account balance must be inspected at least once to guarantee the correct result.",
        lesson:
            "The problem demonstrates the efficiency of a linear-scan strategy on a two-dimensional structure. It reinforces the importance of nested loops for matrix traversal and the use of accumulator variables to track global maximums without extra memory allocation.",
        conclusion:
            "The method is straightforward yet theoretically sound, combining iterative aggregation and maximization. With a time complexity of O(m × n) and constant space complexity of O(1), it represents the most efficient way to solve the problem while maintaining high readability and meeting rigorous academic standards.",
        language: "Go",
        code: `
func maximumWealth(accounts [][]int) int {
    result := 0
    sum := 0

    for i := 0; i < len(accounts); i++ {
        sum = 0
        for j := 0; j < len(accounts[i]); j++ {
            sum = sum + accounts[i][j]
        }
        if sum > result {
            result = sum
        }
    }

    return result
}
    `.trim(),
    },
    {
        id: 13,
        title: "Smallest Even Multiple",
        difficulty: "Easy",
        category: "Math",
        description:
            "Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.",
        approach: [
            "Identify the goal as finding the Least Common Multiple (LCM) of 2 and n",
            "Check the parity of n using the modulo operator (n % 2 == 0)",
            "If n is already even, it is the smallest multiple of both 2 and itself, so return n",
            "If n is odd, multiply n by 2 to find the smallest multiple that is also even"
        ],
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)",
        uniqueInsight:
            "This problem reduces a number-theoretic challenge (LCM) into a simple binary parity decision. Since 2 is a prime number, the smallest common multiple is either n itself (if n is even) or n scaled by 2 (if n is odd), leveraging the algebraic property of divisibility by a prime constant.",
        lesson:
            "The solution demonstrates computational efficiency by bypassing iterative search cycles in favor of a constant-time parity check, highlighting the power of modular arithmetic in simplifying mathematical constraints.",
        conclusion:
            "The implementation is elegant and achieves a perfect runtime of 0ms (Beats 100%). It effectively identifies that the result is bifurcated by the property of n being either a multiple of the generator (2) or requiring a scaling transformation to achieve congruence within the even integer subspace.",
        language: "Go",
        code: `
func smallestEvenMultiple(n int) int {
    if n % 2 == 0 && n % n == 0 {
        return n
    } else {
        return n * 2
    }

    return 0
}
    `.trim(),
    },
    {
    id: 14,
    title: "Find Numbers with Even Number of Digits",
    difficulty: "Easy",
    category: "Math",
    description:
      "Given an array nums of integers, return how many of them contain an even number of digits.",
    approach: [
      "Iterate through each integer in the input array using a standard for-loop",
      "For each number, initialize a digit counter ('even') to zero",
      "Use the 'Chop-off' method: repeatedly divide the current number by 10 to strip the last digit until it reaches zero",
      "Increment the digit counter for every division performed",
      "Use the modulo operator (% 2 == 0) to check if the total digit count is even",
      "Increment the final result count if the condition is met and return it at the end"
    ],
    timeComplexity: "O(n × d)",
    spaceComplexity: "O(1)",
    uniqueInsight:
      "This solution avoids the overhead of converting integers to strings or using logarithmic functions. By using pure integer division, the algorithm interacts directly with the numerical representation in memory, which is why it achieves a perfect 0ms runtime (Beats 100%).",
    lesson:
      "The 'Chop-off' method (iterative division) is a fundamental arithmetic technique for digit manipulation. It demonstrates that for constrained inputs (max 6 digits), simple iterative logic often outperforms more complex built-in library functions.",
    conclusion:
      "The implementation effectively uses a linear-scan strategy combined with a nested digit-counting loop. While the input values are modified during the process, the constant space complexity and high execution speed make this an optimal and reliable approach for real-time processing within the given constraints.",
    language: "Go",
    code: `
func findNumbers(nums []int) int {
    var count int

    for i := 0; i < len(nums); i++ {
        var even int
        for nums[i] > 0 {
            nums[i] = nums[i] / 10
            even++
        }
        if even % 2 == 0 && even != 0 {
            count++
        }
    }

    return count
}
    `.trim(),
},
{
    id: 15,
    title: "Three Consecutive Odds",
    difficulty: "Easy",
    category: "Array",
    description:
      "Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.",
    approach: [
      "Initialize a 'count' variable to track the length of the current sequence of consecutive odd numbers",
      "Iterate through the array from start to finish using a standard loop",
      "Check the parity of each number using the modulo operator (arr[i] % 2 != 0)",
      "If a number is odd, increment the count; if the count reaches 3, break the loop early",
      "If a number is even, reset the count to 0 to represent a broken sequence",
      "After the traversal, return true if the count is 3, otherwise return false"
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    uniqueInsight:
      "This solution utilizes a state-tracking strategy where the 'count' variable acts as a memory of the most recent subsequence. By resetting the counter upon encountering an even number, we effectively model the continuity constraint without needing extra memory or look-ahead logic.",
    lesson:
      "The use of an early exit (break) when the condition is met demonstrates a 'greedy' optimization, ensuring that we perform the minimum amount of work necessary for a correct answer.",
    conclusion:
      "The algorithm is both optimal and elegant, achieving a 0ms runtime (Beats 100%). It demonstrates an efficient exploitation of parity properties and sequential state tracking to identify constrained subsequences within a finite integer array while maintaining linear time and constant space complexity.",
    language: "Go",
    code: `
func threeConsecutiveOdds(arr []int) bool {
    var count int
    
    for I := 0; I < len(arr); I++ {
        if arr[I] % 2 != 0 {
            count++
            if count >= 3 {
                break
            }
        } else {
            count = 0
        }
    }

    if count < 3 {
        return false
    } else {
        return true
    }
}
    `.trim(),
},
{
    id: 16,
    title: "Check If N and Its Double Exist",
    difficulty: "Easy",
    category: "Array",
    description:
      "Given an array arr of integers, check if there exist two indices i and j such that i != j, 0 <= i, j < arr.length, and arr[i] == 2 * arr[j].",
    approach: [
      "Implement a Nested Loop strategy to systematically compare each element with every other element",
      "The outer loop (i) picks the first element as a potential 'double'",
      "The inner loop (j) scans the entire array to find a potential 'half'",
      "Apply a critical check (i != j) to prevent an element from being compared with itself, which is vital for handling cases like 0",
      "Verify the condition arr[i] == 2 * arr[j]",
      "Perform an early return with 'true' as soon as a valid pair is found to optimize execution"
    ],
    timeComplexity: "O(n^2)",
    spaceComplexity: "O(1)",
    uniqueInsight:
      "This implementation demonstrates the divergence between theoretical asymptotic complexity and hardware-level execution. By avoiding the overhead of hash maps or complex data structures, the nested loops maximize spatial locality and minimize heap allocation, which often yields superior performance for small to medium-sized datasets.",
    lesson:
      "Simplicity often outperforms complexity in constrained domains. A deterministic brute-force algorithm can maintain a better cache-hit ratio and reduced architectural entropy compared to more 'advanced' linear solutions that suffer from hashing penalties.",
    conclusion:
      "The solution achieves a perfect 'Beats 100%' result in both Runtime (0ms) and Memory. It proves that within the given constraints, a well-structured iterative approach is not only correct but functionally optimal, prioritizing implementation clarity and hardware efficiency.",
    language: "Go",
    code: `
func checkIfExist(arr []int) bool {
    for i := 0; i < len(arr); i++ {
        for j := 0; j < len(arr); j++ {
            if i == j {
                continue
            }
            if arr[i] == arr[j]*2 {
                return true
            } 
        }
    }
    return false
}
    `.trim(),
},
{
    id: 17,
    title: "Number of Steps to Reduce a Number to Zero",
    difficulty: "Easy",
    category: "Math",
    description:
      "Given an integer num, return the number of steps to reduce it to zero. In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.",
    approach: [
      "Initialize a counter variable to track the total number of operations performed",
      "Implement a loop that continues as long as the current number is greater than zero",
      "Apply parity-based rules: use the modulo operator (%) to check if the number is even",
      "If even, divide the number by 2; if odd, subtract 1 from the number",
      "Increment the step counter after each operation (division or subtraction)",
      "Return the accumulated count once the number reaches the terminal state of zero"
    ],
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    uniqueInsight:
      "This algorithm's behavior is deeply linked to the binary representation of integers. Dividing by 2 is equivalent to a bitwise right-shift, while subtracting 1 handles the odd-bit normalization. The total number of steps is essentially the count of all bits plus the count of '1' bits in the number's binary form.",
    lesson:
      "The logarithmic time complexity O(log n) arises because the value is halved in most steps, leading to a very rapid reduction even for large integers. This demonstrates how binary-style reduction is vastly more efficient than linear decrementing.",
    conclusion:
      "The iterative strategy achieves a perfect 0ms runtime (Beats 100%) by directly operationalizing the transformation rules with minimal overhead. It remains structurally optimal and theoretically sound, maintaining constant auxiliary space while exploiting the implicit relationship between integer arithmetic and binary dynamics.",
    language: "Go",
    code: `
func numberOfSteps(num int) int {
    var count int

    for num > 0 {
        if num % 2 == 0 {
            num = num / 2
            count++
        } else {
            num = num - 1
            count++
        }
    }

    return count
}
    `.trim(),
}, 
{
    id: 18,
    title: "Average Value of Even Numbers That Are Divisible by Three",
    difficulty: "Easy",
    category: "Math",
    description:
      "Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3. The average should be rounded down to the nearest integer.",
    approach: [
      "Initialize two variables: 'result' to accumulate the sum and 'count' to track the number of valid integers",
      "Perform a linear scan of the array to evaluate each element against two conditions",
      "Check if the number is even (num % 2 == 0) and if it is divisible by three (num % 3 == 0)",
      "Alternatively, identify these numbers as multiples of 6 (num % 6 == 0)",
      "If conditions are met, update 'result' and increment 'count'",
      "After the loop, return 0 if no valid numbers were found; otherwise, return the integer division of result / count"
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    uniqueInsight:
      "This problem reduces to a constrained aggregation task. The dual condition (divisible by 2 AND 3) is a logical conjunction that specifically filters for multiples of 6. By using integer division in Go, the requirement to 'round down' is handled natively by the language's arithmetic behavior, eliminating the need for complex floor functions.",
    lesson:
      "Precise logical predicates allow for clean filtering in a single-pass evaluation model. This solution exemplifies how minimal state maintenance (just two counters) can solve an aggregation problem with optimal efficiency.",
    conclusion:
      "The implementation achieves a perfect 0ms runtime (Beats 100%) by avoiding high-level abstractions and staying close to machine-level arithmetic. It is both asymptotically optimal and practically efficient, satisfying all constraints with a deterministic and straightforward linear scan.",
    language: "Go",
    code: `
func averageValue(nums []int) int {
    var result int
    var count int

    for i := 0; i < len(nums); i++ {
        if nums[i] % 2 == 0 && nums[i] % 3 == 0 {
            result += nums[i]
            count++
        }
    }

    if count == 0 {
        return 0
    }

    return result / count
}
    `.trim(),
},
{
    id: 19,
    title: "Fizz Buzz",
    difficulty: "Easy",
    category: "Math",
    description:
        "Given an integer n, return a string array answer (1-indexed) where answer[i] == 'FizzBuzz' if i is divisible by 3 and 5, 'Fizz' if i is divisible by 3, 'Buzz' if i is divisible by 5, and i as a string if none of the above conditions are true.",
    approach: [
        "Iterate through each integer from 1 to n using a loop",
        "Evaluate if the current number is divisible by both 3 and 5 first to avoid logical errors",
        "Check if the number is divisible by 3 or 5 individually as secondary conditions",
        "Convert the integer to a string format if no divisibility conditions are met",
        "Append each result to a dynamic array and return the final sequence"
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    uniqueInsight:
        "The order of checking is crucial: numbers divisible by both 3 and 5 must be handled first to avoid being incorrectly categorized as only 'Fizz' or 'Buzz'.",
    lesson:
        "This structured conditional flow ensures correctness while maintaining readability, utilizing modulo for efficient divisibility checks.",
    conclusion:
        "This solution exemplifies a deterministic mapping between integer sequences and categorical string representations through modular arithmetic, highlighting a fundamental paradigm in algorithm design where discrete numerical properties are translated into symbolic outputs.",
    language: "Go",
    code: `
func fizzBuzz(n int) []string {
    
    var result []string

    for i := 1; i <= n; i++ {
        if i % 3 == 0 && i % 5 == 0 {
            result = append(result, "FizzBuzz")
        } else if i % 3 == 0 {
            result = append(result, "Fizz")
        } else if i % 5 == 0 {
            result = append(result, "Buzz")
        } else {
            NumberInString := strconv.Itoa(i)
            result = append(result, NumberInString)
        }
    }

    return result

}
    `.trim(),
},
{
    id: 20,
    title: "Count Operations to Obtain Zero",
    difficulty: "Easy",
    category: "Math",
    description:
        "You are given two non-negative integers num1 and num2. In one operation, if num1 >= num2, subtract num2 from num1; otherwise, subtract num1 from num2. Return the number of operations required to make either num1 = 0 or num2 = 0.",
    approach: [
        "Initialize a counter to keep track of the number of operations",
        "Implement a loop that continues as long as both num1 and num2 are greater than zero",
        "Apply the subtraction logic: if num1 is greater or equal, subtract num2 from num1",
        "Conversely, if num2 is greater, subtract num1 from num2",
        "Increment the counter after each subtraction step until the terminal condition is met"
    ],
    timeComplexity: "O(max(num1, num2))",
    spaceComplexity: "O(1)",
    uniqueInsight:
        "This problem mirrors the fundamental idea behind the subtraction-based version of the Euclidean Algorithm, reducing the larger value iteratively until one operand reaches zero.",
    lesson:
        "While this approach resembles division, using repeated subtraction makes the logic highly intuitive and ensures the problem size is reduced at every step.",
    conclusion:
        "This solution operationalizes a primitive yet conceptually rich instantiation of the Euclidean reduction process. While it exhibits optimal runtime in practice for small inputs, its theoretical linear complexity highlights the distinction between practical efficiency and asymptotic bounds in subtraction-based regimes.",
    language: "Go",
    code: `
func countOperations(num1 int, num2 int) int {
    
    var count int

    for num1 > 0 && num2 > 0 {
        if num1 >= num2 {
            num1 = num1 - num2
        } else if num2 >= num1 {
            num2 = num2 - num1
        }
        count++
    }

    return count

}
    `.trim(),
},
{
    id: 21,
    title: "Count Odd Numbers in an Interval Range",
    difficulty: "Easy",
    category: "Math",
    description:
        "Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).",
    approach: [
        "Initialize a counter variable to store the count of odd values found",
        "Iterate through every integer starting from low up to and including high",
        "Apply the modulo operator to check if the current number is not divisible by 2",
        "Increment the counter for every number that satisfies the odd parity condition",
        "Return the accumulated result after the loop completes the full range scan"
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    uniqueInsight:
        "The most direct method is an iterative parity check; an odd number is simply any integer not divisible by 2, identified using the modulo operator.",
    lesson:
        "This brute-force approach prioritizes simplicity and readability, making it ideal for beginners, though it sacrifices performance on very large input ranges.",
    conclusion:
        "While algorithmically correct, this linear strategy highlights the trade-off between intuitive iteration and mathematically optimized formulations. It serves as a baseline for correctness before moving toward constant-time arithmetic patterns inherent in number sequences.",
    language: "Go",
    code: `
func countOdds(low int, high int) int {
    
    var result int

    for low <= high {
        if low % 2 != 0 {
            result++
        }
        low++
    }

    return result

}
    `.trim(),
},
{
    id: 22,
    title: "Find Closest Person",
    difficulty: "Easy",
    category: "Simulation",
    description:
        "Given three integers x, y, and z representing positions on a number line, determine which person (1 or 2) reaches Person 3 (at position z) first. Person 1 is at x and Person 2 is at y. Both move at the same speed. Return 1 if Person 1 arrives first, 2 if Person 2 arrives first, and 0 if they arrive at the same time.",
    approach: [
        "Calculate the absolute distance between Person 1 (x) and the target (z)",
        "Calculate the absolute distance between Person 2 (y) and the target (z)",
        "Use manual conditional subtraction (e.g., x - z or z - x) to ensure a non-negative distance without using external math libraries",
        "Compare the two calculated distances: the person with the smaller distance reaches the target first",
        "Return 1, 2, or 0 based on the comparison result"
    ],
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    uniqueInsight:
        "By implementing absolute distance manually through conditional branching rather than using library functions, the solution achieves maximum execution speed by minimizing the call stack overhead.",
    lesson:
        "The problem effectively distills a kinetic movement scenario into a fundamental geometric comparison of absolute differentials on a 1D coordinate system.",
    conclusion:
        "The efficacy of this implementation resides in its adherence to the principle of parsimony. By eschewing computationally expensive abstractions in favor of direct conditional branching, the solution achieves an optimal asymptotic profile, ensuring temporal overhead remains invariant.",
    language: "Go",
    code: `
func findClosest(x int, y int, z int) int {

    var resultX int
    var resultY int

    if x > z {
        resultX = x - z
    } else {
        resultX = z - x
    }

    if y > z {
        resultY = y - z
    } else {
        resultY = z - y
    }

    if resultX > resultY {
        return 2
    } else if resultY > resultX {
        return 1
    } else {
        return 0
    }

}
    `.trim(),
}
];
