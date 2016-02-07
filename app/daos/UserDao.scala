/**
 * simple-crud
 *
 * Copyright 2016 juanitodread
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
package daos

import models.User
import scala.collection.mutable.ListBuffer

trait UserDao {
  def find(): List[User]

  def save(user: User): Unit
}

class MemoryUserDao extends UserDao {
  def find(): List[User] = {
    MemoryUserDao.Users.toList
  }

  def save(user: User): Unit = {
    MemoryUserDao.Users += user
  }
}

object MemoryUserDao {
  val Users = ListBuffer[User](User("1", "Juan", 29, "juan@mail.com"),
                   User("2", "Antonio", 32, "antonio@mail.com"))
}