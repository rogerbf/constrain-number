# constrain-number

Constrain a number.

## usage

```javascript
import { min, max, constrain } from "number-limits"

const min10 = min(10)
const max100 = max(100)
const limiter = constrain({ min: 10, max: 100 })

min10(1) // 10
max100(110) // 100
limiter(1) // 10
limiter(110) // 100
```
